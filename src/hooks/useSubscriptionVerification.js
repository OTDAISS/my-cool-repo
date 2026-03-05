import { useState, useEffect } from 'react';

export const useSubscription = (stripeCustomerId) => {
  const [isFounder, setIsFounder] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubscription = async () => {
      try {
        // Replace with your actual backend route that calls the Stripe API
        const response = await fetch(`/api/check-subscription?customerId=${stripeCustomerId}`);
        const data = await response.json();
        
        // Check if status is active and metadata contains your custom 'founder' flag
        if (data.status === 'active' && data.metadata.tier === 'founder') {
          setIsFounder(true);
        }
      } catch (err) {
        console.error("Subscription check failed", err);
      } finally {
        setLoading(false);
      }
    };
    fetchSubscription();
  }, [stripeCustomerId]);

  return { isFounder, loading };
};
