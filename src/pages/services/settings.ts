export class SettingsService {

    private altBg = false;

    changeAltBg(isAlt: boolean) {
        this.altBg = isAlt;
    }

    isAlt() {
        return this.altBg;
    }
}