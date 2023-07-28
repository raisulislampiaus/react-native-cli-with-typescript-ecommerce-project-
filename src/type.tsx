import { NavigatorScreenParams } from "@react-navigation/native";

export type BottomTabParamList = {
    Home: undefined;
    User: undefined;
}

export type RootStackParamList = {
    BottomTabs: NavigatorScreenParams<BottomTabParamList>;
    details: {id: string, name: string, description: string,images: string[],  price: string;};
}