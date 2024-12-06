import PluginsSection, { style2, svgEffect2 } from "@/app/(default)/plugins/plugins-section";

export default function PluginDocList() {
  return (
    <PluginsSection
      applyThumbEffect={svgEffect2}
      applyStyle={style2}
    />
  )
}
