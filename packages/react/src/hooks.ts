import {I18nInstance} from '@react-native-localize-ext/core';
import {useState, useEffect} from 'react';
import {getSignature, SPLIT_STR, getSignatures} from './utils';

export function useI18n(...i18nList: I18nInstance[]): void {
    const [, setSign] = useState(() => getSignatures(i18nList));

    useEffect(() => {
        const listeners = i18nList.map((item, index) => {
            return item._.listen(() => {
                setSign((value) => {
                    const data = value.split(SPLIT_STR);
                    data[index] = getSignature(item);
                    return data.join(SPLIT_STR);
                });
            });
        });

        return () => {
            listeners.forEach((unListen) => unListen());
        };
    }, []);

    return;
}

export function useLocale(i18n: I18nInstance): string {
    const [locale, setLocale] = useState(i18n._.getLocaleName());
    i18n._.listen((name) => {
        setLocale(name);
    })
    return locale;
}
