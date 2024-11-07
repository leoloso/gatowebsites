import AppSettings from '@/app/app.settings'
import BlackFridayBanner from '@/components/ui/campaigns/black-friday-banner'

export default function CampaignBanner() {

  return (
    <div className="mb-16 -mt-16">
      { AppSettings.campaigns.enableBlackFriday && (
          <BlackFridayBanner />
      )}
    </div>
  )
}
