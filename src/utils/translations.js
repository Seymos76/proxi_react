import translate_fr from "../i18n/translations_fr.json"
import translate_en from "../i18n/translations_en.json"
import translate_es from "../i18n/translations_es.json"
import translate_nl from "../i18n/translations_nl.json"

const messages = {
	'fr': translate_fr,
	'en': translate_en,
	'es': translate_es,
	'nl': translate_nl
}
const language = navigator.language.split(/[-_]/)[0];

export { language, messages }