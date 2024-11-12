import { NetService, PacketTypes, type Packet, type ConnectPacket, type ChangeGameStatePacket, GameState, type QuestionAnswerPacket, type PlayerRevealPacket } from "../net";

export class PlayerGame {
  private net: NetService;
  private state: GameState = GameState.Lobby
  private points: number = 0

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
    }
  }

  getState() {
    return this.state
  }

  getPoints() {
    return this.points
  }
}