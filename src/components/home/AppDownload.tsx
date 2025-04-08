import { Link } from "react-router-dom";

const AppDownload = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <img
              src="https://res.cloudinary.com/pitz/image/upload/v1744118239/Screenshot_2025-04-08_161701_xu0bnd.png"
              alt="Mobile App"
              className="max-w-full"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Download Our Mobile App</h2>
            <p className="text-gray-600 mb-6">
              Sed Luctus Nibh At Consectetur Tempor. Proin Et Ipsum Tincidunt,
              Maximus Turpis Id, Mollis Lacus. Maecenas Nec Risus A Urna
              Sollicitudin Aliquet. Maecenas Pretium Tristique Sapien
            </p>

            <div className="flex space-x-4">
              <Link to="#" className="block">
                <img
                  src="/lovable-uploads/ef23568b-918e-41bc-8a52-62320a1550c9.png"
                  alt="Google Play"
                  className="h-12"
                />
              </Link>
              <Link to="#" className="block">
                <img
                  src="/lovable-uploads/1da8a23b-dad8-4e77-a8b2-af6715c4fdaa.png"
                  alt="App Store"
                  className="h-12"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
