
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { verifyCodeApi } from "../api/Apis";

const ForgotPasswordCode = () => {
  const [verificationCode, setVerificationCode] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const userEmail = location.state && location.state.User_email;

  const handleChangeCode = (e) => {
    setVerificationCode(e.target.value);
  };

  const handleVerifyCode = (e) => {
    e.preventDefault();

    const data = {
      resetCode: verificationCode,
      email: userEmail,
    };

    verifyCodeApi(data)
      .then((res) => {
        if (res.data.success === false) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
          navigate("/resetpassword", { state: { User_email: userEmail } });
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Server Error");
      });
  };

  return (
    <>
      <div className="row vh-100 d-flex align-items-center justify-content-center">
        <div className="col-md-5 bg-white p-4 shadow">
          <h1 className="display-6 text-center my-4">
            Enter Verification Code
          </h1>
          <form onSubmit={handleVerifyCode}>
            <div className="mb-5 mt-3">
              <label htmlFor="Code">
                Please enter the code we've sent to your email.
              </label>
              <br />
              <br />
              <input
                type="text"
                name="code"
                placeholder="Enter Verification code"
                value={verificationCode}
                onChange={handleChangeCode}
                className="w-100"
              />
            </div>
            <button
              onSubmit={handleVerifyCode}
              type="submit"
              className="btn btn-success w-100"
            >
              Verify
            </button>
            <p className="text-center mt-3">
              Didn't get a code?{" "}
              <a
                href="/sendemail"
                className="text-decoration-none text-success text-bold"
              >
                Click to resend
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordCode;

// import React, { useState } from 'react';
// import Navbar from '../components/NavBar';
// import { forgotPassword } from '../api/Apis';
// import { toast} from 'react-toastify';

// const ForgotPassword = () => {
//     const [email, setEmail] = useState('')
 
//     const centerStyle = {
//         position: 'absolute',
//         top: '50%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//     };

//     const formStyle = {
//         maxWidth: '400px',
//         width: '100%',
//     };

//     const typographyStyle = {
//         color: '#000000'
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         forgotPassword({email}).then(res => {
//             toast.success('Please check your email for reset link')
//         }).catch(err => {
//             console.log(err)
//             toast.error('Something went wrong')
//         })
//     }

//     return (
//         <>
//         <div style={{
//         // backgroundImage: `url(${backgroundImg})`,
//         backgroundSize: "cover",
//         height: "100vh",
//         color: "#f5f5f5"
//       }}
//         >

        
//             <Navbar />
//             <Box sx={centerStyle}>
//                 <form style={formStyle}>
//                     <Grid container spacing={2}>
//                         <Grid item xs={12}>
//                            <Box textAlign='center'>
//                            <Typography style={typographyStyle} variant='h4'>Forgot Password</Typography>
//                            </Box>
//                             <Box height={10}/>
//                             <TextField
//                                 fullWidth
//                                 size="large"
//                                 required
//                                 name="email"
//                                 label="Email"
//                                 onChange={(e) => setEmail(e.target.value)}
//                             />
//                         </Grid>
//                         <Grid item xs={12}>
//                             <Button
//                             onClick={handleSubmit}
//                                 variant="contained"
//                                 size="large"
//                                 fullWidth
//                                 sx={{
//                                     mt: '10px',
//                                     borderRadius: 15,
//                                     color: '#ffffff',
//                                     backgroundColor: '#3b33d5',
//                                 }}
//                             >
//                                 Send Password Reset
//                             </Button>
//                         </Grid>
//                     </Grid>
//                 </form>
//             </Box>
//             </div>
//         </>
//     );
// };

// export default ForgotPassword;

