// HostGame.js
import { NetService, PacketTypes, GameState, LeaderboardEntry } from "../net";
import type { HostGamePacket, Packet, PlayerJoinPacket, ChangeGameStatePacket, TickPacket, LeaderboardPacket } from "../net";
import type { Player, QuizQuestion } from "../../model/quiz";

export class HostGame {
  private net: NetService;
  private players: Player[] = [];
  private state: GameState = GameState.Lobby;
  private tick: number = 0;
  private leaderboard: LeaderboardEntry[] = [];
  private currentQuestion: QuizQuestion | null = null

  constructor() {
    this.net = new NetService();
  }

  initializeGame() {
    this.net.connect();
    this.net.onPacket(this.onPacket.bind(this));
  }

  hostQuiz(quizId: string) {
    const packet: HostGamePacket = {
      id: PacketTypes.HostGame,
      quizId: quizId,
    };
    this.net.sendPacket(packet);
  }

  start() {
    this.net.sendPacket({ id: PacketTypes.StartGame });
  }

  private onPacket(packet: Packet) {
    switch (packet.id) {
      case PacketTypes.ChangeGameState:
        const changeStatePacket = packet as ChangeGameStatePacket;
        this.state = changeStatePacket.state;
        break;

      case PacketTypes.PlayerJoin:
        const playerJoinPacket = packet as PlayerJoinPacket;
        this.players.push(playerJoinPacket.player);
        break;

      case PacketTypes.Tick:
        const tickPacket = packet as TickPacket;
        this.tick = tickPacket.tick;
        break
      
      case PacketTypes.Leaderboard:
        const leaderboardPacket = packet as LeaderboardPacket;
        this.leaderboard = leaderboardPacket.entries
        break;

      default:
        break;
    }
  }

  getPlayers() {
    return this.players;
  }

  getState() {
    return this.state;
  }

  getTick() {
    return this.tick;
  }

  getLeaderboard() {
    return this.leaderboard;
  }

  getCurrentQuestion() {
    return this.currentQuestion;
  }
}
