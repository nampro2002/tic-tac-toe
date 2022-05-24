import {
    getCellElementList,
    getCellElementAtIdx,
    getCurrentTurnElement,
    getGameStatusElement,
} from './selectors.js';
import { TURN } from './constants.js';

/**
 * Global variables
 */
let currentTurn = TURN.CROSS;
let isGameEnded = false;
let cellValues = new Array(9).fill('');

function toggleTurn() {
    currentTurn = currentTurn === TURN.CIRCLE ? TURN.CROSS : TURN.CIRCLE;
    const currentTurnElement = getCurrentTurnElement();
    if (currentTurnElement) {
        currentTurnElement.classList.remove(TURN.CROSS, TURN.CIRCLE);
        currentTurnElement.classList.add(currentTurn);
    }
}

function handleCellClick(cell, index) {
    const isClicked =
        cell.classList.contains(TURN.CIRCLE) || cell.classList.contains(TURN.CROSS);
    if (isClicked) return;
    cell.classList.add(currentTurn);
    toggleTurn();
}

function initCellElementList() {
    const cellElementList = getCellElementList();
    console.log(cellElementList);
    cellElementList.forEach((cell, index) => {
        cell.addEventListener('click', () => handleCellClick(cell, index));
    });
}
/**
 * TODOs
 *
 * 1. Bind click event for all cells
 * 2. On cell click, do the following:
 *    - Toggle current turn
 *    - Mark current turn to the selected cell
 *    - Check game state: win, ended or playing
 *    - If game is win, highlight win cells
 *    - Not allow to re-click the cell having value.
 *
 * 3. If game is win or ended --> show replay button.
 * 4. On replay button click --> reset game to play again.
 *
 */
(() => {
    initCellElementList();
})();