import AppSettings from '@gato/app/app.settings'
import BlackFridayBanner from '@gato/components/ui/campaigns/black-friday-banner'
import {BlackFridayBannerInterface} from '@gato/components/ui/campaigns/black-friday-banner'
import clsx from 'clsx'

export interface CampaignBannerInterface extends BlackFridayBannerInterface {
  marginTopClassname?: string,
}

export default function CampaignBanner({
  marginTopClassname = "-mt-16",
  applyStyle,
  dealLabel,
  discountCode,
  endDate,
}: CampaignBannerInterface) {

  return (
    <div className={clsx("mb-16", marginTopClassname)}>
      { AppSettings.campaigns.enableBlackFriday && (
        <BlackFridayBanner
          applyStyle={applyStyle}
          dealLabel={dealLabel}
          discountCode={discountCode}
          endDate={endDate}
        />
      )}
    </div>
  )
}
