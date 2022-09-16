import { View, Image, FlatList } from "react-native";
import { Heading } from "../../components/Heading";
import { GameCard, GameCardProps } from "../../components/GameCard";
import { GAMES } from "../../utils/games";
import { styles } from "./styles";
import logoImage from "../../assets/logo-nlw-esports.png";

export function Home() {
  return (
    <View style={styles.container}>
      <Image 
      source={logoImage} 
      style={styles.logo} />

      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList
        data={GAMES}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <GameCard 
            data={ item }
          />
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentList}
      />
    </View>
  );
}
