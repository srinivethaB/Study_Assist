import { getUserOnboardingStatus } from '@/actions/user'
import { industries } from '@/data/industries'
import React from 'react'
import OnboardingForm from './_components/onboarding-form';
import { redirect } from 'next/navigation';
import { getIndustryInsights } from '@/actions/dashboard';

const OnboardingPage = async() => {
    //check if user is already onboarded
    const {isOnboarded} = await getUserOnboardingStatus();
    const insights = await getIndustryInsights();

    if(isOnboarded){
        redirect("/dashboard"); 
    }
    return (
      <div className="container mx-auto">
        <DashboardView insights={insights} />
      </div>
    );
}

export default OnboardingPage