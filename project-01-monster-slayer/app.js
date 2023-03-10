function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      gameLogs: [],
    };
  },
  methods: {
    attackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      if (this.monsterHealth <= 0) {
        this.monsterHealth = 0;
      }
      this.addLog("player", "attack", attackValue);
      this.attackPlayer();
    },

    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
      if (this.playerHealth <= 0) {
        this.playerHealth = 0;
      }
      this.addLog("monster", "attack", attackValue);
    },
    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(12, 25);
      this.monsterHealth -= attackValue;
      if (this.monsterHealth <= 0) {
        this.monsterHealth = 0;
      }
      this.addLog("player", "special-attack", attackValue);
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const healValue = getRandomValue(8, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.addLog("player", "heal", healValue);
      this.attackPlayer();
    },
    surrender() {
      this.winner = "monster";
      this.addLog("player", "surrender", 0);
    },
    newGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      this.gameLogs = [];
    },
    addLog(actionBy, actionType, actionValue) {
      this.gameLogs.unshift({
        actionBy,
        actionType,
        actionValue,
      });
    },
  },
  computed: {
    monsterHealthBar() {
      return this.monsterHealth + "%";
    },
    playerHealthBar() {
      return this.playerHealthBar + "%";
    },
    isSpecialAttackEnable() {
      return this.currentRound % 3 != 0;
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
  },
});
app.mount("#game");
