const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const app = require("../app");

const { bookService } = require("../services");
const line = () => console.log("\n" + "=".repeat(80));

describe("===============================테스트 시작======================================", () => {
  before(() => {
    console.log(` ⊂_ヽ
　 ＼＼ Λ＿Λ
　　 ＼( ‘ㅅ’ ) 두둠칫
　　　 >　⌒ヽ
　　　/ 　 へ＼
　　 /　　/　＼＼
　　 ﾚ　ノ　　 ヽ_つ
　　/　/두둠칫
　 /　/|
　(　(ヽ
　|　|、＼
　| 丿 ＼ ⌒)
　| |　　) /
ノ )　　Lﾉ`);
  });
  describe("🕺🏻 books 서비스 테스트", () => {
    before(() => {
      line();
    });

    after(() => {
      line();
    });
    it("📌 getAll 함수는 모든 책 리스트를 리턴해야 합니다.", () => {
      const data = bookService.getAll();
      expect(data.length).to.be.eql(8);
    });

    it("📌 getOne 함수는 특정 id에 해당하는 책을 리턴 합니다.", () => {
      const bookId = 336;
      const data = bookService.getOne(bookId);
      expect(data.id).to.be.eql(bookId);
      expect(data.title).to.be.eql("노르웨이의 숲");
      expect(data.rate).to.be.eql(5);
    });

    it("📌 id에 해당하는 책이 없다면 getOne 함수는 false를 리턴합니다.", () => {
      const bookId = 88888;
      const data = bookService.getOne(bookId);
      expect(data).to.be.eql(false);
    });
  });

  describe("🕺🏻 books API 테스트 (controller)", () => {
    describe("📌 모든 책 리스트 조회 [GET] /books", () => {
      after(() => {
        line();
      });

      it("조회에 성공하면 200응답 코드를 보냅니다.", (done) => {
        chai
          .request(app)
          .get(`/books`)
          .end((err, res) => {
            if (err) {
              done(err);
              return;
            } else {
              expect(res.status).to.be.eql(200);
            }
            done();
          });
      });

      it("📌 모든 책 데이터를 조회해야 합니다.", (done) => {
        chai
          .request(app)
          .get(`/books`)
          .end((err, res) => {
            if (err) {
              done(err);
              return;
            } else {
              const { body } = res;
              expect(Array.isArray(body)).to.be.eql(true);
              expect(body.length).to.be.eql(8);
            }
            done();
          });
      });
    });

    describe("📌 id에 해당하는 책 정보 [GET] /books/:id", () => {
      after(() => {
        line();
      });

      it("조회에 성공하면 200응답 코드를 보냅니다.", (done) => {
        const bookId = 253;
        chai
          .request(app)
          .get(`/books/${bookId}`)
          .end((err, res) => {
            if (err) {
              done(err);
              return;
            } else {
              expect(res.status).to.be.eql(200);
            }
            done();
          });
      });

      it("📌 bookId에 해당하는 정보를 가저와야 합니다.", (done) => {
        const bookId = 253;
        chai
          .request(app)
          .get(`/books/${bookId}`)
          .end((err, res) => {
            if (err) {
              done(err);
              return;
            } else {
              const { body } = res;
              expect(body.author).to.be.eql("정세랑");
              expect(body.id).to.be.eql(bookId);
            }
            done();
          });
      });

      it("📌 bookId에 해당하는 책이 없다면 404 Not Found 에러를 보냅니다.", (done) => {
        const bookId = 66666;
        chai
          .request(app)
          .get(`/books/${bookId}`)
          .end((err, res) => {
            if (err) {
              done(err);
              return;
            } else {
              expect(res.status).to.be.eql(404);
            }
            done();
          });
      });
    });
  });

  describe("🕺🏻 미들웨어 테스트", () => {
    after(() => {
      line();
    });
    it("📌 헤더에 토큰이 없다면 401 에러 코드를 보냅니다.", () => {
      chai
        .request(app)
        .patch(`/users`)
        .send({
          name: "Challe",
        })
        .end((err, res) => {
          if (err) {
            done(err);
            return;
          } else {
            expect(res.status).to.be.eql(401);
          }
        });
    });

    it("📌 유저 인증에 실패하면 401에러 코드를 보냅니다.", () => {
      chai
        .request(app)
        .patch(`/users`)
        .set("Authorization", "token159357")
        .send({
          name: "Challe",
        })
        .end((err, res) => {
          if (err) {
            done(err);
            return;
          } else {
            expect(res.status).to.be.eql(403);
          }
        });
    });

    it("📌 유저 인증에 성공하고 이름을 수정하면 201 응답 코드를 보냅니다.", () => {
      chai
        .request(app)
        .patch(`/users`)
        .set("Authorization", "test12345")
        .send({
          name: "Challe",
        })
        .end((err, res) => {
          if (err) {
            done(err);
            return;
          } else {
            expect(res.status).to.be.eql(201);
          }
        });
    });

    it("📌 user의 nmae이 Challe로 수정되어야 합니다.", () => {
      chai
        .request(app)
        .patch(`/users`)
        .set("Authorization", "test12345")
        .send({
          name: "Challe",
        })
        .end((err, res) => {
          if (err) {
            done(err);
            return;
          } else {
            const { body } = res;
            expect(body.name).to.be.eql("Challe");
          }
        });
    });
  });
});
