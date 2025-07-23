'use client';

import { useState } from 'react';
import { StarIcon, GiftIcon, TrophyIcon } from '@heroicons/react/24/outline';
import Layout from '@/components/layout/Layout';
import { useLoyaltyStore } from '@/lib/loyalty';

export default function LoyaltyPage() {
  const { points, totalEarned, tier, tiers, getPointsValue, getPointsToNextTier, redeemPoints } = useLoyaltyStore();
  const [redeemAmount, setRedeemAmount] = useState(100);

  const handleRedeem = () => {
    const creditValue = redeemPoints(redeemAmount);
    if (creditValue > 0) {
      alert(`Successfully redeemed ${redeemAmount} points for $${creditValue.toFixed(2)} credit!`);
    } else {
      alert('Unable to redeem points. Minimum redemption is 100 points.');
    }
  };

  const tierColors = {
    Bronze: 'text-orange-400',
    Silver: 'text-gray-300',
    Gold: 'text-yellow-400',
    Platinum: 'text-purple-400'
  };

  const tierBgColors = {
    Bronze: 'bg-orange-500',
    Silver: 'bg-gray-400',
    Gold: 'bg-yellow-500',
    Platinum: 'bg-purple-500'
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-900">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Kravings Loyalty Program
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Earn points on every purchase and unlock exclusive rewards
            </p>
            <div className="bg-gray-700 rounded-lg p-6 inline-block">
              <div className="flex items-center justify-center space-x-4">
                <TrophyIcon className={`h-8 w-8 ${tierColors[tier]}`} />
                <div>
                  <div className={`text-2xl font-bold ${tierColors[tier]}`}>{tier} Member</div>
                  <div className="text-gray-300">{points} points available</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Points Dashboard */}
        <div className="py-16 bg-gray-850">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Current Points */}
              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <GiftIcon className="h-12 w-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">{points}</h3>
                <p className="text-gray-300">Available Points</p>
                <p className="text-sm text-gray-400 mt-2">
                  Worth ${getPointsValue().toFixed(2)} in credits
                </p>
              </div>

              {/* Total Earned */}
              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <StarIcon className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">{totalEarned}</h3>
                <p className="text-gray-300">Total Points Earned</p>
                <p className="text-sm text-gray-400 mt-2">
                  Lifetime achievement
                </p>
              </div>

              {/* Current Tier */}
              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <TrophyIcon className={`h-12 w-12 ${tierColors[tier]} mx-auto mb-4`} />
                <h3 className={`text-2xl font-bold ${tierColors[tier]} mb-2`}>{tier}</h3>
                <p className="text-gray-300">Current Tier</p>
                {getPointsToNextTier() > 0 && (
                  <p className="text-sm text-gray-400 mt-2">
                    {getPointsToNextTier()} points to next tier
                  </p>
                )}
              </div>
            </div>

            {/* Tier Progress */}
            <div className="bg-gray-800 rounded-lg p-6 mb-12">
              <h3 className="text-xl font-bold text-white mb-6">Tier Progress</h3>
              <div className="space-y-4">
                {Object.entries(tiers).map(([tierName, tierInfo]) => (
                  <div key={tierName} className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-4 h-4 rounded-full ${totalEarned >= tierInfo.threshold ? tierBgColors[tierName] : 'bg-gray-600'}`}></div>
                      <div>
                        <span className={`font-semibold ${totalEarned >= tierInfo.threshold ? tierColors[tierName] : 'text-gray-400'}`}>
                          {tierName}
                        </span>
                        <span className="text-gray-400 ml-2">
                          ({tierInfo.threshold} points)
                        </span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-400">
                      {tierInfo.multiplier}x points
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Redeem Points */}
        <div className="py-16 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Redeem Your Points</h2>
            <div className="bg-gray-700 rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Convert Points to Credits</h3>
                  <p className="text-gray-300 mb-6">
                    Redeem your points for account credits that can be used on any future order. 
                    100 points = $1.00 credit
                  </p>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Points to Redeem (min. 100)
                      </label>
                      <select
                        value={redeemAmount}
                        onChange={(e) => setRedeemAmount(parseInt(e.target.value))}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white"
                      >
                        <option value={100}>100 points ($1.00)</option>
                        <option value={250}>250 points ($2.50)</option>
                        <option value={500}>500 points ($5.00)</option>
                        <option value={1000}>1,000 points ($10.00)</option>
                        <option value={2500}>2,500 points ($25.00)</option>
                      </select>
                    </div>
                    <button
                      onClick={handleRedeem}
                      disabled={points < redeemAmount}
                      className={`w-full py-3 px-6 rounded-lg font-bold transition duration-200 ${
                        points >= redeemAmount
                          ? 'bg-red-500 hover:bg-red-600 text-white'
                          : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      Redeem {redeemAmount} Points
                    </button>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Redemption Rules</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      Minimum redemption: 100 points
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      Credits must be used within 24 hours
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      Points expire after 6 months of inactivity
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      Credits cannot be combined with other discounts
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      Points have no cash value
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How to Earn Points */}
        <div className="py-16 bg-gray-900">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">How to Earn Points</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">🛒</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Every Purchase</h3>
                <p className="text-gray-300 text-sm">Earn 1 point for every $1 spent</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">📦</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Subscription</h3>
                <p className="text-gray-300 text-sm">Earn bonus points with subscription boxes</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">⭐</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Tier Bonuses</h3>
                <p className="text-gray-300 text-sm">Higher tiers earn more points per dollar</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">🎁</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Special Events</h3>
                <p className="text-gray-300 text-sm">Double points during special promotions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tier Benefits */}
        <div className="py-16 bg-gray-800">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Tier Benefits</h2>
            <div className="grid lg:grid-cols-4 gap-8">
              {Object.entries(tiers).map(([tierName, tierInfo]) => (
                <div key={tierName} className={`bg-gray-700 rounded-lg p-6 ${tier === tierName ? 'ring-2 ring-red-500' : ''}`}>
                  <div className="text-center mb-6">
                    <TrophyIcon className={`h-12 w-12 ${tierColors[tierName]} mx-auto mb-2`} />
                    <h3 className={`text-xl font-bold ${tierColors[tierName]} mb-1`}>{tierName}</h3>
                    <p className="text-gray-400 text-sm">{tierInfo.threshold}+ points</p>
                  </div>
                  <div className="space-y-3">
                    <div className="text-center">
                      <span className="text-lg font-semibold text-white">{tierInfo.multiplier}x</span>
                      <p className="text-gray-300 text-sm">Points Multiplier</p>
                    </div>
                    <ul className="space-y-2">
                      {tierInfo.perks.map((perk, index) => (
                        <li key={index} className="flex items-center text-gray-300 text-sm">
                          <span className="text-green-400 mr-2">✓</span>
                          {perk}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}