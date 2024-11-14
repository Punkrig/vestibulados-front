// HostGame.js
import { NetService, PacketTypes, GameState, LeaderboardEntry } from "../net";
import type { HostGamePacket, Packet, PlayerJoinPacket, ChangeGameStatePacket, TickPacket, LeaderboardPacket, QuestionShowPacket, GameCreatedPacket } from "../net";
import type { Player, QuizQuestion } from "../../model/quiz";

export class HostGame {
  private net: NetService;
  private players: Player[] = [];
  private state: GameState = GameState.Lobby;
  private tick: number = 0;
  private leaderboard: LeaderboardEntry[] = [];
  private currentQuestion: QuizQuestion | null = null;
  private code: string = '';
  public isInitialized: boolean = false; // New property to prevent re-initialization

  constructor() {
    this.net = new NetService();
  }

  initializeGame() {
    if (this.isInitialized) return; // Prevent re-initialization
    this.isInitialized = true; // Mark as initialized

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
        break;

      case PacketTypes.Leaderboard:
        const leaderboardPacket = packet as LeaderboardPacket;
        this.leaderboard = leaderboardPacket.entries;
        break;

      case PacketTypes.QuestionShow:
        const questionPacket = packet as QuestionShowPacket;
        this.currentQuestion = questionPacket.question;
        break;

      case PacketTypes.GameCreated:
        const codePacket = packet as GameCreatedPacket;
        this.code = codePacket.code;
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

  getGameCode() {
    return this.code;
  }
}
