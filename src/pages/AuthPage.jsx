import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import { AuthProvider } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';

const AuthPage = ({ type }) => {
  const isLogin = type === 'login';
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const schema = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Min 6 characters').required('Required'),
    ...(isLogin ? {} : { name: Yup.string().required('Required') })
  });

  const handleAuth = async (values, actions) => {
    try {
      // Simulate an API call response
      const response = {
        refresh_token: 'mock_refresh_token_123',
        access_token: 'mock_access_token_abc',
        user: {
          name: values.name || 'Demo User',
          email: values.email,
        }
      };

      // Save to localStorage
      localStorage.setItem("session", JSON.stringify(response));

      // Update context
      setIsAuthenticated(true);

      // Redirect
      navigate("/");

    } catch (err) {
      alert("Something went wrong");
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-700">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>
        <Formik
          initialValues={{ email: '', password: '', name: '' }}
          validationSchema={schema}
          onSubmit={handleAuth}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              {!isLogin && (
                <div>
                  <Field name="name" placeholder="Name" className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                </div>
              )}
              <div>
                <Field type="email" name="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <Field type="password" name="password" placeholder="Password" className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition duration-300"
              >
                {isLogin ? 'Login' : 'Create Account'}
              </motion.button>
            </Form>
          )}
        </Formik>
      </motion.div>
    </div>
  );
};

export default AuthPage;
