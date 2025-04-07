
import { partners } from "@/data/dummyData";

const Partners = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-6 text-center">All Partners</h2>
      
      <div className="grid grid-cols-5 gap-6">
        {partners.map((partner, index) => (
          <div key={index} className="border p-3 rounded-md flex flex-col items-center">
            <div className="w-20 h-20 flex items-center justify-center">
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="max-w-full max-h-full"
              />
            </div>
            <p className="text-sm text-center mt-2">{partner.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
