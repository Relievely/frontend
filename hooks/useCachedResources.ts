import {FontAwesome} from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect, useState} from 'react';
import {ActivityService, JournalService, PersonaService} from "../constants/Services";
import {ResponseObject} from "../constants/Interfaces";

export default function useCachedResources() {
    const [isLoadingComplete, setLoadingComplete] = useState(false);

    // Load any resources or data that we need prior to rendering the app
    useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                SplashScreen.preventAutoHideAsync();

                // Load fonts
                await Font.loadAsync({
                    ...FontAwesome.font,
                    'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
                    'noto-color-emoji': require('../assets/fonts/NotoColorEmoji-Regular.ttf'),
                    'confortaa': require('../assets/fonts/Comfortaa-Variable.ttf')
                });

                //init data for services

                //Activity
                await new Promise((resolve, reject) => {
                    fetch(`${ActivityService}/create`, {
                        method: "PUT"
                    })
                        .then((response) => response.json())
                        .then((data: ResponseObject<object>) => {
                            console.log("Data: ", data.error);
                            if (data.error === undefined) {
                                fetch(`${ActivityService}/fill`, {
                                    method: "PUT"
                                })
                                    .then((response) => response.json())
                                    .then((data: ResponseObject<object>) => {
                                        if (data.error === undefined) {
                                            console.info("Initiated activity service data successfully");
                                            resolve(true);
                                        } else {
                                            reject(data.error);
                                        }
                                    })
                                    .catch((err) => {
                                        reject(err);
                                    })
                            } else {
                                reject(data.error);
                            }
                        })
                        .catch((err) => {
                            console.error("Error: ", err);
                            reject(err);
                        });
                })

                //Journal
                await new Promise((resolve, reject) => {
                    fetch(`${JournalService}/create`, {
                        method: "PUT"
                    })
                        .then((response) => response.json())
                        .then((data: ResponseObject<object>) => {
                            if (data.error !== undefined) {
                                console.info("Initiated journal service data successfully");
                                resolve(true);
                            } else {
                                reject(data.error);
                            }
                        })
                        .catch((err: Error) => {
                            console.error("Error: ", err);
                            reject(err);
                        });
                })

                //Persona
                await new Promise((resolve, reject) => {
                    fetch(`${PersonaService}/create`, {
                        method: "PUT"
                    })
                        .then((response) => response.json())
                        .then((data: ResponseObject<object>) => {
                            if (data.error !== undefined) {
                                fetch(`${PersonaService}/fill`, {
                                    method: "PUT"
                                })
                                    .then((response) => response.json())
                                    .then((data: ResponseObject<object>) => {
                                        if (data.error !== undefined) {
                                            console.info("Initiated persona service data successfully");
                                            resolve(true);
                                        } else {
                                            reject(data.error);
                                        }
                                    })
                            } else {
                                reject(data.error);
                            }
                        })
                        .catch((err) => {
                            console.error("Error: ", err);
                            reject(err);
                        });
                })

            } catch (e) {
                // We might want to provide this error information to an error reporting service
                console.warn(e);
            } finally {
                setLoadingComplete(true);
                SplashScreen.hideAsync();
            }
        }

        loadResourcesAndDataAsync();
    });

    return isLoadingComplete;
}
