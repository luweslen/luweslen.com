// tests/setupFiles/i18n.ts
import { config } from "@vue/test-utils";
import { createI18n } from "vue-i18n";
import { SetupI18n } from "~/i18n/setup.i18n";

const i18n = createI18n(SetupI18n);

config.global.plugins.push(i18n);