import { QuizQuestion } from "../../model/quiz";
import { NetService, PacketTypes, type Packet, type ConnectPacket, type ChangeGameStatePacket, GameState, type QuestionAnswerPacket, type PlayerRevealPacket, TickPacket, LeaderboardEntry, QuestionShowPacket, LeaderboardPacket } from "../net";

export class PlayerGame {
  private net: NetService;
  private points: number = 0;
  private state: GameState = GameState.Lobby;
  private tick: number = 0;
  private leaderboard: LeaderboardEntry[] = [];
  private currentQuestion: QuizQuestion | null = null

  constructor() {
    this.net = new NetService();
    this.net.connect();
    this.net.onPacket(p => this.onPacket(p))
  }

  join(code: string, name: string) {
    let packet: ConnectPacket = {
      id: PacketTypes.Connect,
      code: code,
      name: name,
    }

    this.net.sendPacket(packet)
  }

  answer(question: number) {
    let packet: QuestionAnswerPacket = {
      id: PacketTypes.Answer,
      question: question
    }

    this.net.sendPacket(packet)
  }

  onPacket(packet: Packet) {
    switch(packet.id) {
      case PacketTypes.ChangeGameState:{
        let data = packet as ChangeGameStatePacket;
        this.state = data.state
        break
      }
      case PacketTypes.PlayerReveal:{
        let data = packet as PlayerRevealPacket;
        this.points = data.points
        break
      }
      case PacketTypes.Tick:{
        let data = packet as TickPacket
        this.tick = data.tick
        break
      }
      case PacketTypes.QuestionShow:{
        const QuestionPacket = packet as QuestionShowPacket
        this.currentQuestion = QuestionPacket.question
        break
      }
      case PacketTypes.Leaderboard:{
        const leaderboardPacket = packet as LeaderboardPacket;
        this.leaderboard = leaderboardPacket.entries
        break;
      }
    }
  }

  getState() {
    return this.state
  }

  getPoints() {
    return this.points
  }

  getTick() {
    return this.tick
  }

  getCurrentQuestion() {
    return this.currentQuestion
  }

  getLeaderboard() {
    return this.leaderboard
  }
}