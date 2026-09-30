import fitz
from pathlib import Path

src = Path("assets/pdf/robin-inho-kee-cv.pdf")
tmp = Path("assets/pdf/robin-inho-kee-cv.tmp.pdf")

doc = fitz.open(src)
p1, p2 = doc[0], doc[1]

for link in p1.get_links():
    r = link.get("from")
    if r and 510 < r.y0 < 531 and "UGresearch-2019-06-01-KBD" in link.get("uri", ""):
        p1.delete_link(link)

for r in [
    fitz.Rect(55.3, 323.3, 580.5, 334.9),
    fitz.Rect(140.2, 334.9, 243.6, 346.3),
    fitz.Rect(49.8, 515.8, 358.5, 527.1),
    fitz.Rect(239.9, 643.0, 278.2, 654.4),
]:
    p1.add_redact_annot(r, fill=(1, 1, 1))
p1.apply_redactions()

p2.add_redact_annot(fitz.Rect(43.2, 110.0, 584.5, 136.7), fill=(1, 1, 1))
p2.apply_redactions()

p1.insert_text(
    fitz.Point(55.8, 332.009),
    "Disentangled Prototypical Convolutional Network for Few-Shot Learning in In-Vehicle Noise Classification.",
    fontname="Times-Roman",
    fontsize=9.45,
    color=(0, 0, 0),
    overlay=True,
)
p1.insert_text(
    fitz.Point(140.73, 343.466),
    "S.-J. Buu, and S.-B. Cho.",
    fontname="Times-Roman",
    fontsize=9.35,
    color=(0, 0, 0),
    overlay=True,
)

size = 9.2
x = 50.61
y = 524.387
segments = [
    ("W. Jo, S. Hwang, ", "Times-Roman"),
    ("I. Kee", "Times-Bold"),
    (", I. Lee, and S. Lee. ", "Times-Roman"),
    ("IEEE IEEM", "Times-Italic"),
    (", 2019. ", "Times-Roman"),
    ("[Project Page]", "Times-Roman"),
]
start_project = None
end_project = None
for txt, font in segments:
    if txt == "[Project Page]":
        start_project = x
    p1.insert_text(fitz.Point(x, y), txt, fontname=font, fontsize=size, color=(0, 0, 0), overlay=True)
    x += fitz.get_text_length(txt, fontname=font, fontsize=size)
    if txt == "[Project Page]":
        end_project = x

if start_project is not None:
    p1.draw_line(
        fitz.Point(start_project, y + 1.2),
        fitz.Point(end_project, y + 1.2),
        color=(0, 0, 0),
        width=0.4,
        overlay=True,
    )
    p1.insert_link(
        {
            "kind": fitz.LINK_URI,
            "from": fitz.Rect(start_project, 515.9, end_project, 529.3),
            "uri": "https://signalkee.github.io/projects/UGresearch-2019-06-01-KBD/",
        }
    )

p1.insert_text(
    fitz.Point(240.44, 651.510),
    "S.-J. Buu.",
    fontname="Times-Roman",
    fontsize=9.35,
    color=(0, 0, 0),
    overlay=True,
)

p2.insert_text(
    fitz.Point(48.959, 118.714),
    "Evaluated AC-DC across 12 settings with 20 paired trials each; reduced mean paired AUC by 29.5% and 24.5%",
    fontname="Times-Roman",
    fontsize=9.35,
    color=(0, 0, 0),
    overlay=True,
)
p2.insert_text(
    fitz.Point(48.959, 133.565),
    "versus ADMM-DAC and PP-ACDC, while those baselines used 5.8× and 11.5× as much modeled payload [P4]",
    fontname="Times-Roman",
    fontsize=9.35,
    color=(0, 0, 0),
    overlay=True,
)

doc.save(tmp, garbage=4, deflate=True, clean=True)
doc.close()
tmp.replace(src)
