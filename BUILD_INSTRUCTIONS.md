# Instrukcje Kompilacji APK - Messenger Fake Conversation

## 🚀 Opcje Kompilacji do APK

### Opcja 1: Expo EAS Build (Zalecana - Bezpłatna)

**Expo EAS Build** to najlepsza opcja do kompilacji React Native do APK online, bezpłatnie.

#### Kroki:
1. **Utwórz konto Expo** na https://expo.dev/signup (bezpłatne)
2. **Zainstaluj EAS CLI** (jeśli nie masz):
   ```bash
   npm install -g @expo/cli eas-cli
   ```
3. **Zaloguj się do Expo**:
   ```bash
   expo login
   ```
4. **Skonfiguruj projekt** (w katalogu aplikacji):
   ```bash
   eas build:configure
   ```
5. **Zbuduj APK**:
   ```bash
   eas build --platform android --profile preview
   ```
6. **Pobierz APK** z linku, który otrzymasz po zakończeniu budowania

#### Zalety:
- ✅ Całkowicie bezpłatne
- ✅ Profesjonalne środowisko budowania
- ✅ Automatyczne podpisywanie APK
- ✅ Dostęp przez przeglądarkę internetową
- ✅ Możliwość budowania z telefonu przez stronę expo.dev

---

### Opcja 2: AppsGeyser (Dla prostych aplikacji)

**AppsGeyser** pozwala na tworzenie APK z aplikacji webowych.

#### Kroki:
1. Wejdź na https://appsgeyser.com/
2. Kliknij "Create App"
3. Wybierz "Website to App"
4. Wklej URL swojej aplikacji (jeśli jest hostowana online)
5. Dostosuj design i ustawienia
6. Pobierz gotowy APK

#### Ograniczenia:
- ⚠️ Tylko dla aplikacji webowych
- ⚠️ Ograniczone możliwości customizacji
- ⚠️ Może nie obsługiwać wszystkich funkcji React Native

---

### Opcja 3: Lokalna Kompilacja (Wymaga Android Studio)

Jeśli masz dostęp do komputera z Android Studio:

#### Kroki:
1. **Zainstaluj Android Studio** i Android SDK
2. **Skonfiguruj zmienne środowiskowe**:
   - ANDROID_HOME
   - Dodaj platform-tools do PATH
3. **Wygeneruj klucz podpisywania**:
   ```bash
   keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
   ```
4. **Skonfiguruj gradle** (android/app/build.gradle)
5. **Zbuduj APK**:
   ```bash
   cd android
   ./gradlew assembleRelease
   ```
6. APK znajdziesz w: `android/app/build/outputs/apk/release/`

---

## 📱 Kompilacja z Telefonu

### Expo Go + EAS Build (Najłatwiejsze)

1. **Pobierz aplikację Expo Go** z Google Play Store
2. **Wejdź na expo.dev** w przeglądarce telefonu
3. **Zaloguj się** na swoje konto Expo
4. **Przejdź do sekcji "Builds"**
5. **Kliknij "New Build"**
6. **Wybierz projekt** i platformę Android
7. **Wybierz profil "preview"** (generuje APK)
8. **Rozpocznij budowanie**
9. **Pobierz APK** gdy będzie gotowy

### Termux (Dla zaawansowanych)

Możesz użyć aplikacji **Termux** z Google Play Store do uruchomienia środowiska Linux na telefonie i kompilacji tam.

---

## 🔧 Przygotowanie Projektu

Projekt jest już skonfigurowany z:
- ✅ `app.json` z konfiguracją Expo
- ✅ `eas.json` z profilami budowania
- ✅ Wszystkie wymagane zależności
- ✅ Ikona aplikacji (logo siewkaDesign)
- ✅ Uprawnienia Android

---

## 📋 Wymagania Systemowe APK

- **Android 6.0+** (API level 23+)
- **RAM**: Minimum 2GB
- **Przestrzeń**: ~50MB
- **Uprawnienia**: Aparat, Galeria zdjęć

---

## 🎯 Zalecana Opcja

**Expo EAS Build** jest najlepszą opcją ponieważ:
1. Jest całkowicie bezpłatna
2. Działa z telefonu przez przeglądarkę
3. Automatycznie obsługuje wszystkie zależności React Native
4. Generuje profesjonalny, podpisany APK
5. Nie wymaga instalacji dodatkowego oprogramowania

---

## 🆘 Pomoc

Jeśli napotkasz problemy:
1. Sprawdź dokumentację Expo: https://docs.expo.dev/
2. Skontaktuj się z supportem Expo
3. Sprawdź logi budowania w panelu Expo

---

## 📞 Kontakt

W razie pytań dotyczących aplikacji lub procesu budowania, skontaktuj się z zespołem siewkaDesign.

**Powodzenia w tworzeniu APK!** 🚀

