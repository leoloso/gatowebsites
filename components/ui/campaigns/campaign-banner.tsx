import AppSettings from '@/app/app.settings'
import BlackFridayBanner from '@/components/ui/campaigns/black-friday-banner'
import clsx from 'clsx'

export default function CampaignBanner({
  marginTopClassname = "-mt-16",
}: {
  marginTopClassname?: string,
}) {

  return (
    <div className={clsx("mb-16", marginTopClassname)}>
      { AppSettings.campaigns.enableBlackFriday && (
          <BlackFridayBanner />
      )}
    </div>
  )
}