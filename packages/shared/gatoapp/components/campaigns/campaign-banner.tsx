'use client'

import BlackFridayBanner from 'gatoapp/components/campaigns/black-friday-banner'
import {BlackFridayBannerInterface} from 'gatoapp/components/campaigns/black-friday-banner'
import clsx from 'clsx'
import { useAppSettingsProvider } from 'gatoapp/app/appsettings-provider'

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
  const { settings: AppSettings } = useAppSettingsProvider()

  return (
    <>
      { AppSettings.campaigns.enableBlackFriday && (
        <div className={clsx("mb-16", marginTopClassname)}>
          <BlackFridayBanner
            applyStyle={applyStyle}
            dealLabel={dealLabel}
            discountCode={discountCode}
            endDate={endDate}
          />
        </div>
      )}
    </>
  )
}
