import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

type Product = {
    id: string;
    title: string;
    description: string;
};

const PRODUCTS: Product[] = [
    { id: '1', title: 'Card Title', description: 'Card Description' },
    { id: '2', title: 'Second product', description: 'Another description' },
    { id: '3', title: 'Third product', description: 'More items in the list' },
];

function ProductItem({ product }: { product: Product }) {
    return (
        <View style={styles.card}>
            <Image
                source={require('./assets/images/icon.png')}
                style={styles.cardImage}
            />
            <View style={styles.info}>
                <Text style={styles.cardTitle}>{product.title}</Text>
                <Text style={styles.cardDescription}>{product.description}</Text>
            </View>
        </View>
    );
}

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Welcome to my app</Text>
            </View>
            <FlatList
                data={PRODUCTS}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <ProductItem product={item} />}
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        padding: 20,
    },
    header: {
        backgroundColor: '#007bff',
        padding: 20,
        borderRadius: 10,
        marginBottom: 16,
    },
    title: {
        fontSize: 24,
        color: '#fff',
    },
    listContent: {
        paddingBottom: 24,
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
    },
    cardImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    info: {
        flex: 1,
        marginLeft: 16,
        justifyContent: 'center',
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 8,
    },
    cardDescription: {
        fontSize: 14,
        color: '#666',
    },
});
