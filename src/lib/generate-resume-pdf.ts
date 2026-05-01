import { jsPDF } from "jspdf";
import { resumeData as r } from "./resume-data";

/**
 * Vector-quality PDF resume — selectable text, no rasterization.
 * A4, two-column-ish layout with coral accent.
 */
export function generateResumePDF() {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const W = doc.internal.pageSize.getWidth();
  const H = doc.internal.pageSize.getHeight();
  const M = 48;
  let y = M;

  const ink: [number, number, number] = [26, 26, 30];
  const muted: [number, number, number] = [110, 110, 120];
  const coral: [number, number, number] = [232, 90, 70];

  // Header band
  doc.setFillColor(...ink);
  doc.rect(0, 0, W, 110, "F");
  doc.setFillColor(...coral);
  doc.rect(0, 110, W, 4, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(28);
  doc.text(r.name.toUpperCase(), M, 56);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(255, 200, 190);
  doc.text(r.title, M, 78);

  doc.setFontSize(9);
  doc.setTextColor(220, 220, 220);
  doc.text(`${r.location}  ·  ${r.email}`, M, 96);

  y = 140;

  // Tagline
  doc.setTextColor(...coral);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text("PROFILE", M, y);
  y += 14;
  doc.setTextColor(...ink);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  const summary = doc.splitTextToSize(r.summary, W - M * 2);
  doc.text(summary, M, y);
  y += summary.length * 13 + 12;

  // Highlights row
  doc.setDrawColor(...coral);
  doc.setLineWidth(0.5);
  const cellW = (W - M * 2) / r.highlights.length;
  r.highlights.forEach((h, i) => {
    const x = M + i * cellW;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.setTextColor(...coral);
    doc.text(h.k, x, y + 14);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(...muted);
    doc.text(h.v.toUpperCase(), x, y + 28);
  });
  y += 48;
  doc.setDrawColor(220, 220, 225);
  doc.line(M, y, W - M, y);
  y += 18;

  const section = (title: string) => {
    if (y > H - 100) {
      doc.addPage();
      y = M;
    }
    doc.setTextColor(...coral);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text(title.toUpperCase(), M, y);
    y += 14;
  };

  // Experience
  section("Experience");
  r.experience.forEach((e) => {
    if (y > H - 100) {
      doc.addPage();
      y = M;
    }
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(...ink);
    doc.text(e.role, M, y);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(...muted);
    doc.text(e.period, W - M, y, { align: "right" });
    y += 14;

    doc.setTextColor(...ink);
    doc.setFontSize(9.5);
    e.bullets.forEach((b) => {
      const lines = doc.splitTextToSize(`•  ${b}`, W - M * 2 - 10);
      if (y + lines.length * 12 > H - 50) {
        doc.addPage();
        y = M;
      }
      doc.text(lines, M + 6, y);
      y += lines.length * 12;
    });
    y += 8;
  });

  // Skills
  section("Skills");
  r.skills.forEach((s) => {
    if (y > H - 80) {
      doc.addPage();
      y = M;
    }
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(...ink);
    doc.text(s.group, M, y);
    y += 12;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(...muted);
    const line = doc.splitTextToSize(s.items.join("  ·  "), W - M * 2);
    doc.text(line, M, y);
    y += line.length * 12 + 8;
  });

  // Education
  if (y > H - 100) {
    doc.addPage();
    y = M;
  }
  section("Education");
  r.education.forEach((ed) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10.5);
    doc.setTextColor(...ink);
    doc.text(ed.degree, M, y);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(...muted);
    doc.text(ed.period, W - M, y, { align: "right" });
    y += 12;
    doc.setFontSize(9.5);
    doc.text(ed.school, M, y);
    y += 16;
  });

  // Links
  section("Links");
  r.links.forEach((l) => {
    if (y > H - 50) {
      doc.addPage();
      y = M;
    }
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    doc.setTextColor(...ink);
    doc.text(`${l.label}:`, M, y);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...coral);
    doc.textWithLink(l.href, M + 110, y, { url: l.href });
    y += 14;
  });

  // Footer
  const pages = doc.getNumberOfPages();
  for (let i = 1; i <= pages; i++) {
    doc.setPage(i);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(...muted);
    doc.text(
      `${r.name}  ·  Resume  ·  Page ${i} of ${pages}`,
      W / 2,
      H - 20,
      { align: "center" },
    );
  }

  doc.save(`${r.name.replace(/\s+/g, "_")}_Resume.pdf`);
}
