'use client';

import Layout from '@/components/layout/Layout';

export default function LegalPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Legal Information</h1>
            <p className="text-xl text-gray-300">Terms, Conditions, and Privacy Policy</p>
          </div>

          {/* Terms and Conditions */}
          <div className="bg-gray-800 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Terms and Conditions</h2>
            
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-red-400 mb-3">1. Age Requirements</h3>
                <p>You must be 21 years or older for recreational cannabis purchases, or 18+ with a valid medical marijuana recommendation. Valid government-issued photo ID is required for all deliveries.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-red-400 mb-3">2. Delivery Policies</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Licensed courier delivery is required by law</li>
                  <li>Customer must be present with valid ID matching the order name</li>
                  <li>$10 missed delivery fee applies (waived for first occurrence)</li>
                  <li>Rescheduling requires 48 hours advance notice</li>
                  <li>Delivery hours: 10 AM to 10 PM daily</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-red-400 mb-3">3. Returns and Exchanges</h3>
                <p>Due to California state regulations, we cannot accept returns or exchanges of cannabis products. Damaged or incomplete orders must be reported within 14 days of delivery.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-red-400 mb-3">4. Subscription Service</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Monthly subscription boxes with automatic renewal until canceled</li>
                  <li>Cancellation available via email or website</li>
                  <li>No refunds for previously billed cycles</li>
                  <li>Subscription changes take effect on the next billing cycle</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-red-400 mb-3">5. Loyalty Program</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Points earned on every dollar spent</li>
                  <li>Points expire after 6 months of account inactivity</li>
                  <li>Credits must be used within 24 hours of redemption</li>
                  <li>Points and credits have no cash value</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-red-400 mb-3">6. Taxes and Fees</h3>
                <p>All products are subject to cannabis excise taxes, city taxes, and sales taxes as required by law. Prices displayed include all applicable taxes.</p>
              </div>
            </div>
          </div>

          {/* Privacy Policy */}
          <div className="bg-gray-800 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Privacy Policy</h2>
            
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-red-400 mb-3">Information We Collect</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Personal information (name, address, phone number, email)</li>
                  <li>Government-issued ID for age verification</li>
                  <li>Order history and preferences</li>
                  <li>Payment information (processed securely)</li>
                  <li>Website usage data and analytics</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-red-400 mb-3">How We Use Your Information</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Process and fulfill your orders</li>
                  <li>Verify age and legal compliance</li>
                  <li>Provide customer support</li>
                  <li>Send order updates and notifications</li>
                  <li>Improve our services and website</li>
                  <li>Marketing communications (opt-out available)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-red-400 mb-3">Information Sharing</h3>
                <p>We do not sell, trade, or share your personal information with third parties except as required by law or to fulfill your orders (payment processors, delivery partners).</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-red-400 mb-3">Data Security</h3>
                <p>We implement industry-standard security measures to protect your personal information. Payment information is processed through secure, encrypted channels.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-red-400 mb-3">Marketing Communications</h3>
                <p>You may receive SMS and email marketing messages. Text &quot;STOP&quot; to opt-out of SMS or use the unsubscribe link in emails.</p>
              </div>
            </div>
          </div>

          {/* License Information */}
          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6">License Information</h2>
            <div className="space-y-4 text-gray-300">
              <p><strong className="text-red-400">Company:</strong> Kravings Club LLC</p>
              <p><strong className="text-red-400">License Number:</strong> C9-000555-LIC</p>
              <p><strong className="text-red-400">License Type:</strong> California Cannabis Delivery License</p>
              <p><strong className="text-red-400">Compliance:</strong> Operating in full compliance with California state and local cannabis regulations</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 text-sm">
              Last updated: January 2025 | © 2022 Kravings Club LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}