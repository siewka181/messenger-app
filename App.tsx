import React, { useMemo, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type Language = 'PL' | 'EN';

interface MenuItem {
  id: string;
  labelPl: string;
  labelEn: string;
  descriptionPl: string;
  descriptionEn: string;
  simulatedLogPl: string[];
  simulatedLogEn: string[];
}

const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    labelPl: '1) Pełny Gaming Boost (bezpieczny)',
    labelEn: '1) Full Gaming Boost (safe)',
    descriptionPl: 'CPU + ZRAM + sieć + watchdog termiczny.',
    descriptionEn: 'CPU + ZRAM + network + thermal watchdog.',
    simulatedLogPl: [
      '=== XDR FULL SAFE GAME BOOST ===',
      'CPU → performance',
      'ZRAM 2GB + swappiness 10',
      'Sieć 5G/WiFi zoptymalizowana',
      'Thermal watchdog aktywny',
      '🚀 BOOST ZAKOŃCZONY',
    ],
    simulatedLogEn: [
      '=== XDR FULL SAFE GAME BOOST ===',
      'CPU → performance',
      'ZRAM 2GB + swappiness 10',
      '5G/WiFi optimized',
      'Thermal watchdog active',
      '🚀 BOOST COMPLETED',
    ],
  },
  {
    id: '2',
    labelPl: '2) Zaawansowana diagnostyka baterii',
    labelEn: '2) Advanced battery diagnostics',
    descriptionPl: 'Podgląd kluczowych metryk baterii.',
    descriptionEn: 'Preview key battery metrics.',
    simulatedLogPl: ['=== XDR BATTERY DIAGNOSTICS ===', 'Bateria: 87% | Temp: 34.7°C | Napięcie: 4.1V'],
    simulatedLogEn: ['=== XDR BATTERY DIAGNOSTICS ===', 'Battery: 87% | Temp: 34.7°C | Voltage: 4.1V'],
  },
  {
    id: '10',
    labelPl: '10) Restore Normal Mode',
    labelEn: '10) Restore Normal Mode',
    descriptionPl: 'Rollback ustawień do profilu domyślnego.',
    descriptionEn: 'Rollback settings to default profile.',
    simulatedLogPl: ['=== RESTORE NORMAL MODE ===', 'CPU → schedutil', 'Swappiness → 60', '✅ System przywrócony'],
    simulatedLogEn: ['=== RESTORE NORMAL MODE ===', 'CPU → schedutil', 'Swappiness → 60', '✅ System restored'],
  },
  {
    id: '15',
    labelPl: '15) Test + Fix (benchmarki + diagnostyka)',
    labelEn: '15) Test + Fix (benchmarks + diagnostics)',
    descriptionPl: 'Pakiet testów: bateria, monitoring, throttling.',
    descriptionEn: 'Test package: battery, monitoring, throttling.',
    simulatedLogPl: ['=== FULL XDR AUTOMATED TEST ===', 'Monitor zasobów 5s', 'Test throttling zakończony'],
    simulatedLogEn: ['=== FULL XDR AUTOMATED TEST ===', 'Resource monitor 5s', 'Throttling test finished'],
  },
];

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('PL');
  const [logs, setLogs] = useState<string[]>([]);

  const copy = useMemo(() => {
    if (language === 'PL') {
      return {
        title: 'Android Master Boost v2026.79 Ultimate (APK)',
        subtitle:
          'Wersja APK: interfejs mobilny dla Twojego skryptu. Akcje są symulowane, aby aplikacja była bezpieczna i zgodna z Android sandbox.',
        rootInfo:
          'Uwaga: Czysty React Native nie ma natywnego dostępu root/su. Żeby uruchamiać prawdziwe tweaki kernel/CPU, potrzebny jest osobny moduł natywny i urządzenie z rootem.',
        run: 'Uruchom',
        clear: 'Wyczyść log',
        output: 'Konsola',
      };
    }

    return {
      title: 'Android Master Boost v2026.79 Ultimate (APK)',
      subtitle:
        'APK version: mobile interface for your script. Actions are simulated to stay safe and compatible with Android sandbox.',
      rootInfo:
        'Note: Pure React Native has no native root/su access. To run real kernel/CPU tweaks, you need a native module and a rooted device.',
      run: 'Run',
      clear: 'Clear log',
      output: 'Console',
    };
  }, [language]);

  const appendLogs = (entries: string[]) => {
    setLogs((prev) => [...prev, `[${new Date().toLocaleTimeString()}]`, ...entries, '']);
  };

  const runAction = (item: MenuItem) => {
    appendLogs(language === 'PL' ? item.simulatedLogPl : item.simulatedLogEn);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>{copy.title}</Text>
        <Text style={styles.subtitle}>{copy.subtitle}</Text>

        <View style={styles.langRow}>
          <TouchableOpacity
            style={[styles.langBtn, language === 'PL' && styles.langBtnActive]}
            onPress={() => setLanguage('PL')}>
            <Text style={styles.langLabel}>PL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.langBtn, language === 'EN' && styles.langBtnActive]}
            onPress={() => setLanguage('EN')}>
            <Text style={styles.langLabel}>EN</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.warning}>{copy.rootInfo}</Text>

        {MENU_ITEMS.map((item) => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.cardTitle}>{language === 'PL' ? item.labelPl : item.labelEn}</Text>
            <Text style={styles.cardDesc}>{language === 'PL' ? item.descriptionPl : item.descriptionEn}</Text>
            <TouchableOpacity style={styles.actionBtn} onPress={() => runAction(item)}>
              <Text style={styles.actionLabel}>{copy.run}</Text>
            </TouchableOpacity>
          </View>
        ))}

        <View style={styles.logHeader}>
          <Text style={styles.logTitle}>{copy.output}</Text>
          <TouchableOpacity onPress={() => setLogs([])}>
            <Text style={styles.clear}>{copy.clear}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.logBox}>
          {logs.length === 0 ? (
            <Text style={styles.empty}>...</Text>
          ) : (
            logs.map((line, idx) => (
              <Text key={`${line}-${idx}`} style={styles.logLine}>
                {line}
              </Text>
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050816',
  },
  content: {
    padding: 16,
    paddingBottom: 36,
  },
  title: {
    color: '#44f6c6',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    color: '#c2d7ff',
    lineHeight: 20,
    marginBottom: 12,
  },
  langRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },
  langBtn: {
    borderWidth: 1,
    borderColor: '#2753cc',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  langBtnActive: {
    backgroundColor: '#2753cc',
  },
  langLabel: {
    color: 'white',
    fontWeight: '700',
  },
  warning: {
    color: '#ffcf66',
    marginBottom: 12,
    lineHeight: 20,
  },
  card: {
    backgroundColor: '#0e1730',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#27365f',
  },
  cardTitle: {
    color: '#f4f7ff',
    fontWeight: '700',
    marginBottom: 4,
  },
  cardDesc: {
    color: '#b4c0de',
    marginBottom: 10,
  },
  actionBtn: {
    alignSelf: 'flex-start',
    backgroundColor: '#18a76f',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  actionLabel: {
    color: 'white',
    fontWeight: '700',
  },
  logHeader: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logTitle: {
    color: '#e8efff',
    fontWeight: '700',
  },
  clear: {
    color: '#82b1ff',
  },
  logBox: {
    marginTop: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#27365f',
    backgroundColor: '#03060f',
    padding: 10,
    minHeight: 120,
  },
  logLine: {
    color: '#88f5d3',
    fontSize: 12,
    marginBottom: 2,
  },
  empty: {
    color: '#60739f',
  },
});

export default App;
