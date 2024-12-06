import PluginsSection, { style3, svgEffect2, linkToPluginDoc } from "@/app/(default)/plugins/plugins-section";

export default function PluginDocList() {
  return (
    <PluginsSection
      applyThumbEffect={svgEffect2}
      applyStyle={style3}
      linkTarget={linkToPluginDoc}
    />
  )
}
