import { Suspense } from 'react';

// Server Component - runs on the server
async function ArmyStats() {
  // Simulate fetching army statistics from a database
  const armyData = await new Promise(resolve => 
    setTimeout(() => resolve({
      totalUnits: 6,
      activeProjects: 3,
      experimentalProjects: 4, // Including new React 19 unit!
      securityVulnerabilities: 0, // After our training!
      performanceScore: 95,
      lastDeployment: new Date().toLocaleDateString()
    }), 100)
  );

  return (
    <div className="bg-gradient-to-r from-blue-900 to-purple-900 p-6 rounded-lg text-white">
      <h2 className="text-2xl font-bold mb-4">🎖️ Madanzo Digital Army Stats</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-white/10 p-4 rounded">
          <div className="text-3xl font-bold">{(armyData as any).totalUnits}</div>
          <div className="text-sm opacity-80">Total Units</div>
        </div>
        <div className="bg-white/10 p-4 rounded">
          <div className="text-3xl font-bold">{(armyData as any).activeProjects}</div>
          <div className="text-sm opacity-80">Active Projects</div>
        </div>
        <div className="bg-white/10 p-4 rounded">
          <div className="text-3xl font-bold text-green-400">{(armyData as any).securityVulnerabilities}</div>
          <div className="text-sm opacity-80">Security Issues</div>
        </div>
        <div className="bg-white/10 p-4 rounded">
          <div className="text-3xl font-bold text-yellow-400">{(armyData as any).performanceScore}%</div>
          <div className="text-sm opacity-80">Performance</div>
        </div>
        <div className="bg-white/10 p-4 rounded col-span-2">
          <div className="text-lg font-bold">{(armyData as any).lastDeployment}</div>
          <div className="text-sm opacity-80">Last Training Exercise</div>
        </div>
      </div>
    </div>
  );
}

// Loading component for Suspense
function ArmyStatsLoading() {
  return (
    <div className="bg-gray-200 animate-pulse p-6 rounded-lg">
      <div className="h-8 bg-gray-300 rounded mb-4 w-1/3"></div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-gray-300 p-4 rounded h-20"></div>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🏰 Madanzo Digital Army Command Center
          </h1>
          <p className="text-xl text-gray-600">
            React 19 Server Components Training Unit - Demonstrating Next-Gen Capabilities
          </p>
        </header>

        <div className="space-y-8">
          {/* Server-side rendered statistics with Suspense */}
          <section>
            <Suspense fallback={<ArmyStatsLoading />}>
              <ArmyStats />
            </Suspense>
          </section>

          {/* Training accomplishments */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 Training Accomplishments</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-green-600">✅ Security Training Complete</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Next.js critical vulnerability patched (14.2.30)</li>
                  <li>• React production site vulnerabilities resolved</li>
                  <li>• Zero security issues remaining</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-blue-600">🚀 New Unit Capabilities</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• React 19 Server Components integration</li>
                  <li>• Next.js 15 with Turbopack readiness</li>
                  <li>• Advanced TypeScript + Tailwind CSS</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Future training programs */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">📈 Upcoming Training Programs</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-semibold text-yellow-600">AI Integration Unit</h3>
                <p className="text-sm text-gray-600">OpenAI & Claude API integration</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-purple-600">Performance Corps</h3>
                <p className="text-sm text-gray-600">Bun runtime & optimization</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-green-600">Analytics Division</h3>
                <p className="text-sm text-gray-600">PostHog & real-time monitoring</p>
              </div>
            </div>
          </section>
        </div>

        <footer className="mt-12 text-center text-gray-500">
          <p>🤖 Powered by React 19 Server Components & Next.js 15</p>
          <p className="text-sm">Generated with Claude Code - Army Training Excellence</p>
        </footer>
      </div>
    </main>
  );
}
