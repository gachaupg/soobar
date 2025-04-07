
import Layout from "@/components/layout/Layout";
import RegisterForm from "@/components/auth/RegisterForm";

interface RegisterFormData {
  userType: "personal" | "company";
  fullName: string;
  email: string;
  mobile: string;
  whatsapp: boolean;
  password: string;
  confirmPassword: string;
  termsAgreed: boolean;
}

const Register = () => {
  const handleRegister = (data: RegisterFormData) => {
    console.log("Register attempt with:", data);
    // In a real app, would make an API call and redirect after successful registration
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img 
              src="/lovable-uploads/6e39c0d9-6c24-4176-9411-7a5f76cb8373.png" 
              alt="Registration illustration"
              className="max-w-full h-auto rounded-lg"
            />
            <div className="text-center mt-6">
              <h2 className="font-bold text-2xl mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing</h2>
            </div>
          </div>
          
          <div className="md:w-1/2 max-w-md mx-auto bg-white p-8 rounded-lg shadow-sm">
            <RegisterForm onSubmit={handleRegister} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
