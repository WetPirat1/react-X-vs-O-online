import {GameCell} from './game-cell'
import {GameInfo} from './game-info'
import styles from './game.module.css';
import { useGameState } from './use-game-state.js';


export function Game() {
    const {
        cells,
        currentStep,
        winnerSequence,
        winnerSymbol,
        handleCellClick,
        handleResetClick,
        isDraw,
    } = useGameState();

    return (
        <div className={styles['game']}>
            <GameInfo
                isDraw={isDraw}
                winnerSymbol={winnerSymbol}
                currentStep={currentStep}
            />
            <div className={styles['game-field']}>
                {cells.map((symbol, index) => (
                    <GameCell
                        key={index}
                        symbol={symbol}
                        isWinner={winnerSequence?.includes(index)}
                        onClick={() => handleCellClick(index)}
                    />
                ))}
            </div>
            <button className={styles["reset"]} onClick={handleResetClick}>
                Сбросить
            </button>
        </div>
    );
}