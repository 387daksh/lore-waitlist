/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */


import { motion } from 'motion/react';
import { Brain, RefreshCw, Users } from 'lucide-react';
import React from 'react';
export default function App() {
  return (
    <div className="min-h-screen bg-bg">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="max-w-7xl mx-auto px-6 lg:px-12 pt-0 pb-12"
      >
        {/* Nav Bar */}
        <nav className="flex items-center justify-between py-4 mb-4">
          <div className="font-mono text-[16px] font-medium tracking-tight">
            lore<span className="text-accent">.</span>
          </div>
          <div className="px-2.5 py-0.5 font-mono text-[10px] font-semibold tracking-[0.15em] border border-accent/30 bg-accent/10 text-accent rounded-full shadow-[0_0_12px_rgba(124,109,250,0.1)]">
            EARLY ACCESS
          </div>
        </nav>

        {/* Hero Section */}
        <main className="w-full">
          <section className="mb-24 flex flex-col items-center text-center">
            <div className="font-mono text-[11px] text-text-muted tracking-[0.15em] uppercase mb-2">
              PERMANENT MEMORY FOR CODING AGENTS
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] leading-[1.05] text-text-primary mb-6 max-w-4xl text-balance">
              Your coding agent forgets everything.<br />
              <span className="text-text-secondary">Every. Single. Session.</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary leading-[1.6] max-w-2xl mb-6 text-balance">
              Lore gives your agent permanent memory — automatically. No CLAUDE.md files. No manual context. Works with Claude Code, Cursor, and Codex.
            </p>

            {/* Viral Loops Form */}
            <div className="w-full max-w-[440px]">
                {React.createElement('form-widget', { 
                  ucid: 'teEuj2CfJ5JQW1pQ3siwVfqXFQU' 
            } ) }
            </div>

            <p className="text-[12px] text-text-muted mt-4">
              No spam. Unsubscribe anytime. Refer a friend to move up the queue.
            </p>
          </section>

          <hr className="border-border w-full mb-32" />

          {/* Before/After Section */}
          <section className="mb-40">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch relative">

              {/* Before Block */}
              <div className="flex flex-col">
                <div className="font-mono text-[11px] text-text-muted tracking-[0.1em] uppercase mb-4">
                  BEFORE LORE
                </div>
                <div className="bg-surface border border-border rounded-[12px] overflow-hidden flex-1">
                  <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-surface/50">
                    <div className="flex gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></div>
                    </div>
                    <div className="font-mono text-[12px] text-text-muted">session_start.md</div>
                  </div>
                  <div className="p-8 font-mono text-[14px] leading-relaxed">
                    <div className="text-text-muted opacity-40 mb-4">// Every. Single. Session.</div>
                    <div className="line-through text-text-muted opacity-50">"We use PostgreSQL not MySQL"</div>
                    <div className="line-through text-text-muted opacity-50">"Auth is in /src/middleware/auth.ts"</div>
                    <div className="line-through text-text-muted opacity-50">"We tried Redis, it didn't work"</div>
                    <div className="line-through text-text-muted opacity-50">"Payment module is frozen"</div>
                    <div className="line-through text-text-muted opacity-50">"We use jose not jsonwebtoken"</div>
                    <div className="text-text-muted opacity-40 mt-6">// 15 minutes. Every session. Forever.</div>
                  </div>
                </div>
              </div>

              {/* After Block */}
              <div className="flex flex-col">
                <div className="font-mono text-[11px] text-success/80 tracking-[0.1em] uppercase mb-4">
                  WITH LORE
                </div>
                <div className="bg-surface border border-border rounded-[12px] overflow-hidden flex-1 border-success/10">
                  <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-surface/50">
                    <div className="flex gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></div>
                    </div>
                    <div className="font-mono text-[12px] text-text-muted">terminal</div>
                  </div>
                  <div className="p-8 font-mono text-[14px] leading-relaxed">
                    <div className="text-text-muted opacity-40 mb-4">// Permanent memory active</div>
                    <div className="text-text-secondary">$ claude</div>
                    <div className="text-success mt-4">
                      "I can see you're using PostgreSQL<br />
                      with jose for auth. Payment module<br />
                      is frozen. Ready to work."
                    </div>
                    <div className="text-text-muted opacity-40 mt-6">// Zero re-explaining. Always.</div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Feature Grid */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-40">
            <div className="p-8 bg-surface border border-border rounded-[12px] space-y-6 hover:border-border-hover transition-all">
              <div className="w-10 h-10 rounded-[10px] border border-accent/20 bg-accent-glow flex items-center justify-center">
                <Brain className="w-5 h-5 text-accent" />
              </div>
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-text-primary tracking-tight">Zero setup</h3>
                <p className="text-[14px] text-text-secondary leading-[1.6]">
                  Connect once. Lore silently watches and builds memory automatically from your sessions. Works in the background while you code.
                </p>
              </div>
            </div>

            <div className="p-8 bg-surface border border-border rounded-[12px] space-y-6 hover:border-border-hover transition-all">
              <div className="w-10 h-10 rounded-[10px] border border-accent/20 bg-accent-glow flex items-center justify-center">
                <RefreshCw className="w-5 h-5 text-accent" />
              </div>
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-text-primary tracking-tight">Always current</h3>
                <p className="text-[14px] text-text-secondary leading-[1.6]">
                  Memory updates itself. No stale files. No manual maintenance. Knows exactly what changed across every session.
                </p>
              </div>
            </div>

            <div className="p-8 bg-surface border border-border rounded-[12px] space-y-6 hover:border-border-hover transition-all">
              <div className="w-10 h-10 rounded-[10px] border border-accent/20 bg-accent-glow flex items-center justify-center">
                <Users className="w-5 h-5 text-accent" />
              </div>
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-text-primary tracking-tight">Team memory</h3>
                <p className="text-[14px] text-text-secondary leading-[1.6]">
                  What one teammate's agent learns, every agent on the team benefits from. Build a shared brain for your whole team.
                </p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-border pt-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 opacity-60">
              <div className="flex items-center gap-6 flex-wrap justify-center">
                <span className="font-mono text-[11px] text-text-muted uppercase tracking-widest">Claude Code</span>
                <span className="font-mono text-[11px] text-text-muted uppercase tracking-widest">Cursor</span>
                <span className="font-mono text-[11px] text-text-muted uppercase tracking-widest">Codex</span>
                <span className="font-mono text-[11px] text-text-muted uppercase tracking-widest">MCP compatible</span>
              </div>
              <div className="font-mono text-[11px] text-text-muted uppercase tracking-widest">
                © 2026 Lore
              </div>
            </div>
          </footer>

        </main>
      </motion.div>
    </div>
  );
}