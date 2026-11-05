/* GRE Error Log: every GRE question missed in any app of the suite, to retry and annotate. */
(function () {
  'use strict';
  const byTopic = (mistakes) => { const c = {}; for (const m of mistakes) { const k = m.topic || 'Other'; c[k] = (c[k] || 0) + 1; } return Object.entries(c).sort((a, b) => b[1] - a[1]); };
  const App = {
    about: 'Mistakes are the best study material you have. Every GRE question you miss in any app of this suite is logged here automatically, with the question itself, so you can retry it, write a note on why you missed it, and see which topics cause the most trouble.',
    how: ['Practise in any GRE app of the suite. Missed questions appear in **Mistakes**.', 'Write a short note for each: careless, did not know the word, ran out of time.', 'Press **Retry** to redo them as a practice set.', 'See **By topic** for the areas to study next.'],
    tabs: [
      { id: 'log', label: 'Mistakes', render(el) { SK.mistakesView(el, 'GRE'); } },
      { id: 'topics', label: 'By topic', render(el) {
        const m = SK.store.get('suite.mistakes', []).filter((x) => x.exam === 'GRE');
        const t = byTopic(m);
        el.appendChild(SK.card('Mistakes by topic', t.length ? SK.chart.bars(t.slice(0, 10).map(([k, v]) => ({ label: k.slice(0, 10), value: v })), { label: 'Mistakes by topic' }) : SK.h('p', { class: 'sk-muted', text: 'No GRE mistakes logged yet.' }), t.length ? SK.table(['Topic', 'Mistakes'], t) : null));
      } },
    ],
    byTopic,
    checks: { 'topics are counted and sorted': (data, assert) => { assert.deepEqual(byTopic([{ topic: 'A' }, { topic: 'B' }, { topic: 'A' }, {}]), [['A', 2], ['B', 1], ['Other', 1]]); } },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = App; else SK.start(App);
})();
