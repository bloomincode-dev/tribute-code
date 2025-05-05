"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const codeExamples = [
  {
    title: "Python Hello World",
    language: "python",
    code: `# Chương trình Python đầu tiên của tôi nhờ Thầy Brad!
print("Xin chào, Thầy Brad!")
print("Cảm ơn thầy đã dạy tôi Python!")

# Một hàm đơn giản để bày tỏ lòng biết ơn
def bieu_lo_long_biet_on(ten_giao_vien, ky_nang_da_hoc):
    print(f"Kính gửi {ten_giao_vien},")
    print("Cảm ơn thầy đã dạy tôi:")
    for ky_nang in ky_nang_da_hoc:
        print(f"- {ky_nang}")
    print("Thầy là người thầy tuyệt vời nhất!")

# Gọi hàm với những gì tôi đã học được
bieu_lo_long_biet_on("Brad Duy", [
    "Lập trình Python",
    "Phát triển web",
    "FastAPI",
    "Kỹ năng giải quyết vấn đề",
    "Sự tự tin trong lập trình"
])`,
    output: `Xin chào, Thầy Brad!
Cảm ơn thầy đã dạy tôi Python!
Kính gửi Brad Duy,
Cảm ơn thầy đã dạy tôi:
- Lập trình Python
- Phát triển web
- FastAPI
- Kỹ năng giải quyết vấn đề
- Sự tự tin trong lập trình
Thầy là người thầy tuyệt vời nhất!`,
  },
  {
    title: "HTML Thiệp Cảm Ơn",
    language: "html",
    code: `<!-- Dự án HTML đầu tiên của tôi nhờ Thầy Brad! -->
<!DOCTYPE html>
<html>
<head>
    <title>Cảm Ơn Thầy Brad!</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f5f5f5;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .card {
            background: linear-gradient(135deg, #6e8efb, #a777e3);
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            padding: 30px;
            text-align: center;
            color: white;
            max-width: 500px;
            position: relative;
            overflow: hidden;
        }
        .card::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 80%);
            transform: rotate(30deg);
        }
        h1 {
            margin-top: 0;
            font-size: 28px;
        }
        .heart {
            color: #ff6b6b;
            font-size: 24px;
            animation: pulse 1.5s infinite;
        }
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
        }
    </style>
</head>
<body>
    <div class="card">
        <h1>Cảm Ơn Thầy Brad!</h1>
        <p>Từ một người sợ hãi IT đến một người có thể xây dựng trang web...</p>
        <p>Sự giảng dạy của thầy đã thay đổi cuộc đời tôi!</p>
        <p class="heart">❤️</p>
        <p>Với lòng biết ơn,<br>Học viên của thầy</p>
    </div>
</body>
</html>`,
    output: "HTML Thiệp Cảm Ơn (hiển thị một thiệp gradient đẹp mắt với lời cảm ơn)",
  },
  {
    title: "FastAPI API Lòng Biết Ơn",
    language: "python",
    code: `# Ứng dụng FastAPI đầu tiên của tôi nhờ Thầy Brad!
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field
from typing import List
import random

app = FastAPI(title="API Lòng Biết Ơn cho Thầy Brad")

class KyNang(BaseModel):
    ten: str
    cap_do: int = Field(..., ge=1, le=10)  # Thang điểm 1-10
    mo_ta: str = None

class LoiBietOn(BaseModel):
    giao_vien: str
    loi_nhan: str
    ky_nang_da_hoc: List[KyNang]
    danh_gia: int = Field(..., ge=1, le=5)  # Thang điểm 1-5

class PhanHoi(BaseModel):
    trang_thai: str
    ma_phan_hoi: str
    thong_diep: str
    so_ky_nang: int
    cap_do_trung_binh: float

@app.get("/")
def doc_trang_chu():
    return {"thong_diep": "API Cảm Ơn Thầy Brad"}

@app.post("/gui-loi-biet-on/", response_model=PhanHoi)
def gui_loi_biet_on(loi_biet_on: LoiBietOn):
    # Trong ứng dụng thực tế, điều này sẽ lưu vào cơ sở dữ liệu
    if loi_biet_on.danh_gia < 5:
        raise HTTPException(
            status_code=400, 
            detail="Thầy Brad xứng đáng được đánh giá 5 sao!"
        )
    
    ma_phan_hoi = f"THANK-{random.randint(1000, 9999)}"
    
    return PhanHoi(
        trang_thai="thành công",
        ma_phan_hoi=ma_phan_hoi,
        thong_diep=f"Đã gửi lời biết ơn đến {loi_biet_on.giao_vien}",
        so_ky_nang=len(loi_biet_on.ky_nang_da_hoc),
        cap_do_trung_binh=sum(k.cap_do for k in loi_biet_on.ky_nang_da_hoc) / len(loi_biet_on.ky_nang_da_hoc)
    )

# Ví dụ sử dụng:
# POST đến /gui-loi-biet-on/ với:
# {
#   "giao_vien": "Brad Duy",
#   "loi_nhan": "Cảm ơn thầy đã là một người thầy tuyệt vời!",
#   "ky_nang_da_hoc": [
#     {"ten": "Python", "cap_do": 8, "mo_ta": "Lập trình cơ bản và nâng cao"},
#     {"ten": "FastAPI", "cap_do": 7, "mo_ta": "Xây dựng API RESTful"},
#     {"ten": "Phát triển Web", "cap_do": 6, "mo_ta": "HTML, CSS và JavaScript"}
#   ],
#   "danh_gia": 5
# }`,
    output: "FastAPI API Lòng Biết Ơn (tạo một API endpoint để gửi lời cảm ơn)",
  },
]

export default function CodeEditor() {
  const [activeTab, setActiveTab] = useState("tab1")
  const [showOutput, setShowOutput] = useState(false)
  const [isCopied, setIsCopied] = useState(false)
  const [typingIndex, setTypingIndex] = useState(0)
  const [typedOutput, setTypedOutput] = useState("")

  const activeCode = codeExamples[Number.parseInt(activeTab.replace("tab", "")) - 1]

  useEffect(() => {
    setShowOutput(false)
    setTypingIndex(0)
    setTypedOutput("")
  }, [activeTab])

  useEffect(() => {
    if (showOutput && typingIndex < activeCode.output.length) {
      const timer = setTimeout(() => {
        setTypedOutput((prev) => prev + activeCode.output[typingIndex])
        setTypingIndex((prev) => prev + 1)
      }, 10)
      return () => clearTimeout(timer)
    }
  }, [showOutput, typingIndex, activeCode.output])

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeCode.code)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-800">
      {/* Tabs */}
      <Tabs defaultValue="tab1" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="border-b border-gray-800 bg-gray-950 px-2">
          <TabsList className="bg-transparent h-12">
            {codeExamples.map((example, index) => (
              <TabsTrigger
                key={index}
                value={`tab${index + 1}`}
                className={`px-4 py-2 text-sm font-medium data-[state=active]:bg-gray-800 data-[state=active]:text-white data-[state=inactive]:text-gray-400 data-[state=inactive]:hover:text-gray-200 data-[state=inactive]:hover:bg-gray-800/50 rounded-t-lg transition-all`}
              >
                {example.title}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {codeExamples.map((example, index) => (
          <TabsContent key={index} value={`tab${index + 1}`} className="p-0 m-0">
            {/* Code Editor */}
            <div className="p-6 relative">
              <div className="flex justify-between items-center mb-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCopyCode}
                  className="text-gray-400 hover:text-white hover:bg-gray-800"
                >
                  {isCopied ? <Check size={16} /> : <Copy size={16} />}
                  <span className="ml-2">{isCopied ? "Đã sao chép" : "Sao chép"}</span>
                </Button>
              </div>

              <pre className="text-gray-300 overflow-x-auto font-mono text-sm p-4 bg-gray-950 rounded-lg">
                <code>{example.code}</code>
              </pre>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute bottom-6 right-6 bg-green-500 text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm font-medium"
                onClick={() => setShowOutput(!showOutput)}
              >
                <Play size={16} />
                <span>{showOutput ? "Ẩn Kết Quả" : "Chạy Code"}</span>
              </motion.button>
            </div>

            {/* Output */}
            <AnimatePresence>
              {showOutput && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-800 border-t border-gray-700 p-6"
                >
                  <div className="text-xs text-gray-400 mb-2">Kết quả:</div>
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap bg-gray-900 p-4 rounded-lg">
                    {typedOutput}
                    {typingIndex < activeCode.output.length && (
                      <span className="inline-block w-2 h-4 bg-green-400 ml-1 animate-pulse"></span>
                    )}
                  </pre>
                </motion.div>
              )}
            </AnimatePresence>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
