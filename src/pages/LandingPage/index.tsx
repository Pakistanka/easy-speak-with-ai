import { LandingAbout, LandingFeedback, LandingFooter, LandingHeading, LandingLearningApp, LandingQuestions, LeandingStartSteps } from './components';


export const LandingPage = () => (
  <div className="container max-w-[1324px] flex items-center justify-center flex-wrap px-5 sm:pb-30 pb-24">
    <LandingHeading />
    <LandingAbout />
    <LandingLearningApp />
    <LeandingStartSteps />
    <LandingFeedback />
    <LandingQuestions />
    <LandingFooter />
  </div>
)
