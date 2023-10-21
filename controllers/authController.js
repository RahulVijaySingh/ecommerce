import { comparePassword, hashPassword } from "../helpers/authhelper.js";
import userModel from "../models/userModel.js";
import JWT from 'jsonwebtoken';

export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body      //destructeuring
        // validation
        if (!name) {
            return res.send({ error: "Name is required" })
        }
        if (!email) {
            return res.send({ error: "Nmae is Required" })
        }
        if (!password) {
            return res.send({ error: "Nmae is Required" })
        }
        if (!phone) {
            return res.send({ error: "Nmae is Required" })
        }
        if (!address) {
            return res.send({ error: "Nmae is Required" })
        }

        // check user
        const existinguser = await userModel.findOne({ email: email })     //it will also work if we only write one email

        // existing user
        if (existinguser) {
            return res.status(200).send({
                success: true,
                message: "Already Registerd please login",
            })
        }

        // regiter user
        const hashedPassword = await hashPassword(password)
        // save
        const user = await new userModel({ name, email, phone, address, password: hashedPassword }).save()

        res.status(201).send({
            success: true,
            message: "User Registerd successfully",
            user,
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Registration",
            error
        })
    }
};

// login controller

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body
        // validation
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: "Invalid email or password",
            })
        }

        // check user
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "Error in login",
            })
        }

        const match = await comparePassword(password, user.password)
        if (!match) {
            return res.status(200).send({
                success: false,
                message: 'Invalid Password'
            })
        }
        // token
        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.status(200).send({
            success: true,
            message: 'login successfully',
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
            }, token,
        });



    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in login",
            error
        })
    }
}

// test controller
export const testController = (req, res) => {
    // console.log('protected route')
    res.send("protected route")
}