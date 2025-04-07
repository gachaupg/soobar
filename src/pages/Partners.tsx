import { Partners } from "@/components/Partners";

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">Our Partners</h1>
            <p className="text-lg text-gray-600">
              We're proud to work with some of the world's most innovative and
              trusted brands. Together, we're creating exceptional experiences
              and driving innovation forward.
            </p>
          </div>
        </div>
      </div>

      <Partners className="bg-white" />

      <div className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Become a Partner
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center">
              Join our network of industry leaders and innovators. We're always
              looking for new partnerships that can help us deliver more value
              to our customers.
            </p>
            <div className="text-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
              >
                Contact Us About Partnership
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
