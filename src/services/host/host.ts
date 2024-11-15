// HostGame.js
import { NetService, PacketTypes, GameState, LeaderboardEntry } from "../net";
import type { HostGamePacket, Packet, PlayerJoinPacket, ChangeGameStatePacket, TickPacket, LeaderboardPacket, QuestionShowPacket, GameCreatedPacket, QuestionAnswerPacket, PlayerRevealPacket } from "../net";
import type { Player, QuizQuestion } from "../../model/quiz";

export class HostGame {
  private net: NetService;
  private players: Player[] = [];
  private state: GameState = GameState.Lobby;
  private tick: number = 0;
  private leaderboard: LeaderboardEntry[] = [];
  private currentQuestion: QuizQuestion | null = null;
  private code: string = '';
  public isInitialized: boolean = false;
  private hostPlayer: Player; // New property to represent the host as a player
  private points: number = 0;

  constructor(id: string, hostPlayerName: string) {
    this.net = new NetService();
    this.hostPlayer = { id: id , name: hostPlayerName }; // Initialize host player

    this.players.push(this.hostPlayer)
  }

  initializeGame() {
    if (this.isInitialized) return;
    this.isInitialized = true;

    this.net.connect();
    this.net.onPacket(this.onPacket.bind(this));
  }

  answer(question: number) {
    let packet: QuestionAnswerPacket = {
      id: PacketTypes.Answer,
      question: question
    }

    this.net.sendPacket(packet)
  }

  hostQuiz(quizId: string) {
    const packet: HostGamePacket = {
      id: PacketTypes.HostGame,
      quizId: quizId,
      hostPlayer: this.hostPlayer
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
      
      case PacketTypes.PlayerReveal:
        let data = packet as PlayerRevealPacket;
        this.points = data.points
        break

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
        this.leaderboard = leaderboardPacket.points
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

  getPoints() {
    return this.points
  }
}
