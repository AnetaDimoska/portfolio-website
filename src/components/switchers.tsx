import LocaleSwitch from "./locale-switch";
import ThemeSwitch from "./theme-switch";

export default function Switchers() {
    return (
        <div className="fixed flex flex-col-reverse md:flex-row md:items-center top-6 md:top-9 right-[14px] xxxl:top-6 xxl:right-6">
            <LocaleSwitch /> 
            <ThemeSwitch />
        </div>
    );
}