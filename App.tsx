import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { ConversationListScreen } from './src/screens/ConversationListScreen';
import { ChatScreen } from './src/screens/ChatScreen';
import { NewConversationScreen } from './src/screens/NewConversationScreen';
import { EditContactScreen } from './src/screens/EditContactScreen';
import { Colors } from './src/styles/colors';

type Screen = 'conversationList' | 'chat' | 'newConversation' | 'editContact';

interface AppState {
  currentScreen: Screen;
  currentConversationId?: string;
}

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>({
    currentScreen: 'conversationList',
  });

  const navigateToConversation = (conversationId: string) => {
    setAppState({
      currentScreen: 'chat',
      currentConversationId: conversationId,
    });
  };

  const navigateToNewConversation = () => {
    setAppState({
      currentScreen: 'newConversation',
    });
  };

  const navigateToEditContact = (conversationId: string) => {
    setAppState({
      currentScreen: 'editContact',
      currentConversationId: conversationId,
    });
  };

  const navigateToConversationList = () => {
    setAppState({
      currentScreen: 'conversationList',
    });
  };

  const handleConversationCreated = (conversationId: string) => {
    navigateToConversation(conversationId);
  };

  const handleContactUpdated = () => {
    // Odśwież listę konwersacji
    navigateToConversationList();
  };

  const renderCurrentScreen = () => {
    switch (appState.currentScreen) {
      case 'conversationList':
        return (
          <ConversationListScreen
            onConversationPress={navigateToConversation}
            onNewConversationPress={navigateToNewConversation}
          />
        );

      case 'chat':
        if (!appState.currentConversationId) {
          navigateToConversationList();
          return null;
        }
        return (
          <ChatScreen
            conversationId={appState.currentConversationId}
            onBackPress={navigateToConversationList}
          />
        );

      case 'newConversation':
        return (
          <NewConversationScreen
            onBackPress={navigateToConversationList}
            onConversationCreated={handleConversationCreated}
          />
        );

      case 'editContact':
        if (!appState.currentConversationId) {
          navigateToConversationList();
          return null;
        }
        return (
          <EditContactScreen
            conversationId={appState.currentConversationId}
            onBackPress={navigateToConversationList}
            onContactUpdated={handleContactUpdated}
          />
        );

      default:
        return (
          <ConversationListScreen
            onConversationPress={navigateToConversation}
            onNewConversationPress={navigateToNewConversation}
          />
        );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.background}
        translucent={false}
      />
      {renderCurrentScreen()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});

export default App;

