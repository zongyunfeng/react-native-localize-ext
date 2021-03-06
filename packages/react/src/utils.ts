import { I18nInstance } from '@react-native-localize-ext/core';

export const SPLIT_STR = '###';

export const getSignature = (i18n: I18nInstance) => {
	return i18n._.getLocaleName();
};

export const getSignatures = (i18nList: I18nInstance[]) => {
	return i18nList.map(getSignature).join(SPLIT_STR);
};
