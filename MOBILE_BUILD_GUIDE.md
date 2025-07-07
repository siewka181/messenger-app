# 📱 Przewodnik Budowania APK z Telefonu

## 🎯 Najłatwiejszy Sposób: Expo EAS Build

### Krok 1: Przygotowanie
1. **Pobierz aplikację Expo Go** z Google Play Store
2. **Utwórz konto** na https://expo.dev/signup (bezpłatne)
3. **Zaloguj się** w aplikacji Expo Go

### Krok 2: Upload Projektu
1. **Rozpakuj** plik `MessengerFakeConversation.tar.gz`
2. **Skopiuj** cały folder na swój telefon
3. **Użyj aplikacji GitHub** lub **Termux** do upload'u kodu

#### Opcja A: GitHub (Zalecana)
1. Utwórz nowe repozytorium na GitHub
2. Upload wszystkie pliki projektu
3. Skopiuj URL repozytorium

#### Opcja B: Termux
1. Pobierz **Termux** z F-Droid lub Google Play
2. Zainstaluj git: `pkg install git nodejs`
3. Sklonuj lub skopiuj projekt do Termux

### Krok 3: Budowanie przez Przeglądarkę
1. **Otwórz** https://expo.dev w przeglądarce telefonu
2. **Zaloguj się** na swoje konto
3. **Kliknij** "Create a new project"
4. **Wybierz** "Import from GitHub" (jeśli używasz GitHub)
5. **Wklej** URL swojego repozytorium

### Krok 4: Konfiguracja Budowania
1. **Przejdź** do sekcji "Builds"
2. **Kliknij** "Create build"
3. **Wybierz**:
   - Platform: **Android**
   - Profile: **preview** (generuje APK)
   - Build type: **apk**

### Krok 5: Rozpoczęcie Budowania
1. **Kliknij** "Start build"
2. **Poczekaj** 5-15 minut na zakończenie
3. **Otrzymasz** link do pobrania APK

### Krok 6: Instalacja APK
1. **Pobierz** APK na telefon
2. **Włącz** "Nieznane źródła" w ustawieniach Android
3. **Zainstaluj** APK przez menedżer plików

---

## 🔄 Alternatywne Metody

### Metoda 1: Replit (Online IDE)
1. Wejdź na **replit.com**
2. Utwórz nowy projekt React Native
3. Upload pliki aplikacji
4. Użyj terminala do budowania z Expo

### Metoda 2: CodeSandbox
1. Wejdź na **codesandbox.io**
2. Utwórz projekt React Native
3. Import plików aplikacji
4. Użyj integracji z Expo

### Metoda 3: Gitpod
1. Wejdź na **gitpod.io**
2. Otwórz workspace z GitHub repo
3. Zainstaluj Expo CLI
4. Zbuduj APK przez EAS Build

---

## 📋 Wymagane Pliki

Upewnij się, że masz wszystkie pliki:
- ✅ `app.json` - Konfiguracja Expo
- ✅ `eas.json` - Konfiguracja budowania
- ✅ `package.json` - Zależności
- ✅ `src/` - Kod źródłowy aplikacji
- ✅ `src/assets/siewka_design_logo.png` - Logo

---

## ⚡ Szybki Start (5 minut)

### Dla GitHub:
```bash
# W Termux lub online IDE
git clone [twoje-repo-url]
cd MessengerFakeConversation
npm install -g @expo/cli eas-cli
expo login
eas build --platform android --profile preview
```

### Dla Expo Web:
1. Wejdź na expo.dev
2. "New Project" → "Import from GitHub"
3. Wklej URL repo
4. "Builds" → "Create build" → Android → preview
5. Poczekaj i pobierz APK

---

## 🎨 Customizacja przed Budowaniem

### Zmiana Nazwy Aplikacji:
Edytuj `app.json`:
```json
{
  "expo": {
    "name": "Twoja Nazwa Aplikacji",
    "displayName": "Nazwa na Ekranie"
  }
}
```

### Zmiana Ikony:
Zamień plik `src/assets/siewka_design_logo.png` na swoją ikonę (512x512px)

### Zmiana Koloru Splash Screen:
W `app.json`:
```json
{
  "splash": {
    "backgroundColor": "#TwójKolor"
  }
}
```

---

## 🔧 Rozwiązywanie Problemów

### Problem: "Build failed"
**Rozwiązanie**: Sprawdź logi budowania w panelu Expo

### Problem: "Invalid app.json"
**Rozwiązanie**: Sprawdź składnię JSON w app.json

### Problem: "Missing dependencies"
**Rozwiązanie**: Uruchom `npm install` przed budowaniem

### Problem: APK nie instaluje się
**Rozwiązanie**: 
1. Włącz "Nieznane źródła" w ustawieniach
2. Sprawdź czy APK nie jest uszkodzony
3. Spróbuj pobrać ponownie

---

## 📞 Wsparcie

### Expo Support:
- Discord: https://chat.expo.dev/
- Dokumentacja: https://docs.expo.dev/
- Forum: https://forums.expo.dev/

### siewkaDesign Support:
- Sprawdź README.md w projekcie
- Kontakt przez GitHub Issues

---

## 🎉 Gratulacje!

Po wykonaniu tych kroków będziesz mieć gotowy plik APK aplikacji **Messenger Fake Conversation** z interfejsem siewkaDesign!

**Aplikacja będzie działać na wszystkich urządzeniach Android 6.0+** 🚀

