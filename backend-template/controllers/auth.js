import userModel, { simpleUserModel } from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import logger from "../config/logger.js";

export async function loginUser(req, res) {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState('');
    const router = useRouter();
    const dispatch = useDispatch(); 
  
    // Handle input change
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    // Handle form 
    const submit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post("http://localhost:3001/login", {
          email: formData.email,
          password: formData.password
        });
  
        // Store token in localStorage
        localStorage.setItem("token", response.data.token);
  
        // Dispatch the login action 
        dispatch(login({ token: response.data.token, email: formData.email , 
      }));
  
        router.push("/");  // Redirect after login
  
      } catch (error) {
        setError("Email ou mot de passe incorrect.");
      }
    };

export async function registerUser(req, res) {
    try {
        const { email, password, firstName, lastName, role } = req.body;
        const user = await simpleUserModel.create({
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
        });

        const token = jwt.sign({ _id: user._id.toString() }, process.env.AUTH_SECRET, {
            expiresIn: 3600 * 24,
        });
        res.json({ user: user.toSimpleUser(), token: token });
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

export function checkUser(req, res) {
    res.json({ data: req.user.toSimpleUser() });
}
