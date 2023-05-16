import Image from 'next/image'

import styles from '../styles/About.module.css';

export default function about () {
    return (
        <div className={styles.about}>
            <h1> Sobre o projeto </h1>
            <p>
            Charizard é um Pokémon do tipo Fogo/Voador, conhecido por sua aparência imponente e poderosa. Ele tem um corpo grande e musculoso, pele laranja brilhante, barriga amarela e uma crista vermelha nas costas da cabeça. Possui asas poderosas e uma longa cauda em chamas. Em batalha, ele usa ataques de fogo, como "Lança-Chamas", e pode voar em alta velocidade. Charizard é leal e protetor de seus treinadores, além de ser um dos Pokémon mais icônicos da franquia.
            </p>
                <Image
                    src="/images/charizard.png"
                    width="300"
                    height="300"
                    alt="charizard"
                
                
                
                />

        </div>

    )
}