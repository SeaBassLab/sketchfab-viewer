declare type Params = Record<string, string>;
export const default_params: Params = {
  autostart: "1",
  autospin: "0.2",
  preload: "1",
  ui_infos: "0",
  ui_stop: "0",
  ui_controls: "1",
  ui_fadeout: "0",
  ui_fullscreen: "0",
  ui_settings: "0",
  ui_help: "0",
  ui_inspector: "0",
  ui_vr: "0",
  ui_ar: "0",
  ui_watermark: "0",
  ui_ar_help: "0",
  ui_ar_qrcode: "0",
  ui_loading: "0",
};
export const base_url = "https://sketchfab.com/models/";
export const embed_path = "/embed?";
export const required_params: Params = {
  api_id: "1",
  api_version: "1.12.1",
};
