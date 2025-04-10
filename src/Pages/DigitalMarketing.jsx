import React from 'react'
import DigitalMarketingHero from '../Components/DigitalMarketing/DigitalMarketingHero'
import DigitalMarketingPointers from '../Components/DigitalMarketing/DigitalMarketingPointers'
import DigitalMarketingOverview from '../Components/DigitalMarketing/DigitalMarketingOverview'
import DigitalMarketingOfferings from '../Components/DigitalMarketing/DigitalMarketingOfferings'
import DigitalMarketingStudying from '../Components/DigitalMarketing/DigitalMarketingStudying'
// import DigitalMarketingNumbers from '../Components/DigitalMarketing/DigitalMarketingNumbers'
// import DigitalMarketingHighlights from '../Components/DigitalMarketing/DigitalMarketingHighlights'
import DigitalMarketingJoin from '../Components/DigitalMarketing/DigitalMarketingJoin'
import DigitalMarketingTestimonials from '../Components/DigitalMarketing/DigitalMarketingTestimonials'
import DigitalMarketingPlacement from '../Components/DigitalMarketing/DigitalMarketingPlacement'
import DigitalMarketingCarrerPaths from '../Components/DigitalMarketing/DigitalMarketingCarrerPaths'
import Recruiter from '../Pages/Recruiter'

function DigitalMarketing() {
  return (
    <div>
      <DigitalMarketingHero />
      <DigitalMarketingPointers />
      <Recruiter />
      <DigitalMarketingOverview />
      <DigitalMarketingOfferings />
      <DigitalMarketingStudying />
     <DigitalMarketingCarrerPaths /> 
      {/* <DigitalMarketingNumbers />
      <DigitalMarketingHighlights /> */}
      <DigitalMarketingJoin />
      <DigitalMarketingPlacement />
      <DigitalMarketingTestimonials />


    </div>
  )
}

export default DigitalMarketing