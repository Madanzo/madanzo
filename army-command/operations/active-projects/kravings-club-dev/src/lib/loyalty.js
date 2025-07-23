import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useLoyaltyStore = create(
  persist(
    (set, get) => ({
      points: 0,
      totalEarned: 0,
      tier: 'Bronze', // Bronze, Silver, Gold, Platinum
      isSubscriber: false,
      subscriptionPlan: null,
      
      // Points per dollar spent (base rate)
      pointsRate: 1,
      
      // Tier benefits
      tiers: {
        Bronze: { threshold: 0, multiplier: 1, perks: ['Standard shipping'] },
        Silver: { threshold: 500, multiplier: 1.25, perks: ['Priority support', '5% bonus points'] },
        Gold: { threshold: 1500, multiplier: 1.5, perks: ['Free express shipping', 'Early access to sales'] },
        Platinum: { threshold: 3000, multiplier: 2, perks: ['Personal curator', 'Exclusive products', 'VIP support'] }
      },
      
      // Add points for purchase
      addPoints: (orderTotal, isSubscription = false) => {
        set((state) => {
          const basePoints = Math.floor(orderTotal * state.pointsRate);
          const tierMultiplier = state.tiers[state.tier].multiplier;
          const subscriptionBonus = isSubscription ? (state.subscriptionPlan === 'premium' ? 2 : state.subscriptionPlan === 'connoisseur' ? 3 : 1) : 1;
          
          const earnedPoints = Math.floor(basePoints * tierMultiplier * subscriptionBonus);
          const newTotalPoints = state.points + earnedPoints;
          const newTotalEarned = state.totalEarned + earnedPoints;
          
          // Check for tier upgrade
          const newTier = state.calculateTier(newTotalEarned);
          
          return {
            points: newTotalPoints,
            totalEarned: newTotalEarned,
            tier: newTier
          };
        });
      },
      
      // Redeem points for credits
      redeemPoints: (pointsToRedeem) => {
        const { points } = get();
        if (pointsToRedeem <= points && pointsToRedeem >= 100) {
          const creditValue = pointsToRedeem / 100; // 100 points = $1 credit
          set((state) => ({
            points: state.points - pointsToRedeem
          }));
          return creditValue;
        }
        return 0;
      },
      
      // Calculate tier based on total earned points
      calculateTier: (totalEarned) => {
        const { tiers } = get();
        if (totalEarned >= tiers.Platinum.threshold) return 'Platinum';
        if (totalEarned >= tiers.Gold.threshold) return 'Gold';
        if (totalEarned >= tiers.Silver.threshold) return 'Silver';
        return 'Bronze';
      },
      
      // Set subscription status
      setSubscription: (plan) => {
        set({
          isSubscriber: !!plan,
          subscriptionPlan: plan
        });
      },
      
      // Get points value in dollars
      getPointsValue: () => {
        const { points } = get();
        return points / 100;
      },
      
      // Get points needed for next tier
      getPointsToNextTier: () => {
        const { totalEarned, tiers, tier } = get();
        const tierKeys = Object.keys(tiers);
        const currentTierIndex = tierKeys.indexOf(tier);
        
        if (currentTierIndex === tierKeys.length - 1) {
          return 0; // Already at highest tier
        }
        
        const nextTier = tierKeys[currentTierIndex + 1];
        return tiers[nextTier].threshold - totalEarned;
      },
      
      // Simulate points expiry (6 months inactivity)
      checkPointsExpiry: () => {
        // In a real app, this would check against last activity date
        // For demo purposes, we'll just track this
        const lastActivity = localStorage.getItem('kravings-last-activity');
        const sixMonthsAgo = Date.now() - (6 * 30 * 24 * 60 * 60 * 1000);
        
        if (lastActivity && parseInt(lastActivity) < sixMonthsAgo) {
          set({ points: 0 });
        }
      },
      
      // Update last activity
      updateActivity: () => {
        localStorage.setItem('kravings-last-activity', Date.now().toString());
      }
    }),
    {
      name: 'kravings-loyalty',
      getStorage: () => localStorage,
    }
  )
);