import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

import Category from "../../../../categories/infra/typeorm/entities/Category";
import OrderProduct from "../../../../orders/infra/typeorm/entities/OrderProduct";

@Entity("produtos")

export default class Product {
    @PrimaryGeneratedColumn("increment")
    id: number;
    @Column()
    nome: string;
    @Column()
    preco: number;
    @Column()
    quantidade: number;
    @Column()
    categoria_id: number;

    @ManyToOne(() => Category, (category) => category.produtos)
    @JoinColumn({ name: "categoria_id" })
    categoria: Category;
    @OneToMany(() => OrderProduct, (order_product) => order_product.produto)
    pedido_produtos: OrderProduct[];

    @CreateDateColumn({ select: false })
    created_at: Date;
    @UpdateDateColumn({ select: false })
    updated_at: Date;
}